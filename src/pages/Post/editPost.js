import React, { useEffect, useState, useContext } from 'react';
import { Button, Grid, Image, Input, Text, Col, Row } from '@nextui-org/react';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
import Grey from '../../assets/Grey.jpeg';
import { AuthContext } from '../../context/authContext';

export default function EditPost() {
  const { currentUser } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [loggedin, setLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split('/')[2];
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [initialImage, setInitialImg] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;
      setImageURL(result); // Set the result as the imageURL
      console.log(result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/posts/${id}`);
      console.log('RESP' + response.data.title);
      setPost(response.data);
      if (response.data.img) {
        setImageURL(`http://localhost:8800${response.data.img.imageUrl}`);
        console.log(post.title);
        setInitialImg(response.data.img);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.state != null) {
      setLoggedIn(location.state.loggedIn);
    }
    fetchPost();
  }, []);

  const upload = async () => {
    if (!imageFile) return null;
    try {
      const formData = new FormData();
      console.log(imageFile);
      formData.append('file', imageFile);

      const res = await axios.post('http://localhost:8800/api/upload', formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async () => {
    const imgUrl = await upload();
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);

    if (imgUrl) {
      try {
        await axios.put(
          `http://localhost:8800/api/posts/${id}`,
          {
            username: currentUser.username,
            title,
            desc: JSON.stringify(rawContentState),
            img: imgUrl || '', // Use the imgUrl if available, otherwise an empty string
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            isdraft: 'n',
          },
          { withCredentials: true }
        );
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios.put(
          `http://localhost:8800/api/posts/${id}`,
          {
            ...post,
            username: currentUser.username,
            title,
            desc: JSON.stringify(rawContentState),
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            isdraft: 'n',
          },
          { withCredentials: true }
        );
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSave = async () => {
    const imgUrl = await upload();
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);

    if (imgUrl) {
      try {
        await axios.put(
          `http://localhost:8800/api/posts/${id}`,
          {
            username: currentUser.username,
            title,
            desc: JSON.stringify(rawContentState),
            img: imgUrl || '', // Use the imgUrl if available, otherwise an empty string
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            isdraft: 'y',
          },
          { withCredentials: true }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios.put(
          `http://localhost:8800/api/posts/${id}`,
          {
            ...post,
            username: currentUser.username,
            title,
            desc: JSON.stringify(rawContentState),
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            isdraft: 'y',
          },
          { withCredentials: true }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(post.desc))));
      if (post.img) {
        setImageURL(`http://localhost:8800${post.img.imageUrl}`);
      }
    }
  }, [post, initialImage]);

  return (
    <>
      {loggedin && (
        <Grid.Container direction="column" alignItems="center" css={{ width: '100vw' }}>
          <Text
            css={{
              '@xsMin': {
                fontSize: '$2xl',
              },
              '@xsMax': {
                fontSize: '$xl',
              },
              fontWeight: '$semibold',
              padding: '24px 48px',
            }}
          >
            What would you like to write about today, {currentUser.username}?
          </Text>
          <Input
            labelPlaceholder="Title"
            bordered
            clearable
            css={{ marginBottom: '48px', position: 'relative', mt: '24px' }}
            onChange={(e) => setTitle(e.target.value)}
            initialValue={title}
          />
          <Grid alignItems="center" css={{ marginBottom: '2rem', position: 'relative' }}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              placeholder="Content"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
            />
          </Grid>
          <Grid>
            <Col
              css={{
                w: 350,
              }}
            >
              <Text
                css={{
                  '@xsMin': {
                    fontSize: '$lg',
                  },
                  '@xsMax': {
                    fontSize: '$md',
                  },
                  fontWeight: '$medium',
                  padding: '12px',
                }}
              >
                Upload Cover Picture
              </Text>
              {imageURL && (
                <Image
                  src={imageURL}
                  width={350}
                  height={275}
                  css={{
                    w: '100%',
                    h: '100%',
                    objectFit: 'cover',
                  }}
                />
              )}
              {!imageURL && (
                <Image
                  src={Grey}
                  width={350}
                  height={275}
                  css={{
                    w: '100%',
                    h: '100%',
                    objectFit: 'cover',
                  }}
                />
              )}
            </Col>
          </Grid>
          <input
            type="file"
            label="Upload Cover Picture"
            onChange={handleImageUpload}
            style={{ padding: '12px' }}
          />
          <Row
            css={{
              jc: 'space-evenly',
              '@xsMin': {
                width: '50vw',
              },
              padding: '48px',
            }}
          >
            <Button
              flat
              auto
              color="primary"
              onPress={() => {
                // upload post details to database with the user username ofc and "isdraft" as "y"
                handleSave();
              }}
            >
              <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                Save draft
              </Text>
            </Button>
            <Button
              flat
              auto
              color="secondary"
              onPress={() => {
                // upload post details to database with the user username ofc and "isdraft" as "n"
                handlePublish();
              }}
            >
              <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                Publish
              </Text>
            </Button>
          </Row>
        </Grid.Container>
      )}

      {!loggedin && (
        <Grid.Container
          css={{
            jc: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            flexDirection: 'column',
          }}
        >
          <Text
            css={{
              color: '$error',
              '@xsMin': {
                fontSize: '$3xl',
                fontWeight: '$semibold',
              },
              '@xsMax': {
                fontSize: '$xl',
                fontWeight: '$semibold',
              },
            }}
          >
            Access Denied!
          </Text>
          <Text
            css={{
              color: 'white',
              '@xsMin': {
                fontSize: '$xl',
                fontWeight: '$medium',
              },
              '@xsMax': {
                fontSize: '$lg',
                fontWeight: '$medium',
              },
            }}
          >
            Please login first.
          </Text>
        </Grid.Container>
      )}
    </>
  );
}

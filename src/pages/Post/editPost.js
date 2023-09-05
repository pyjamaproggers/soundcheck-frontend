import React, { useEffect, useState, useContext } from 'react';
import { Button, Grid, Image, Input, Text, Col, Row } from '@nextui-org/react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
import Grey from '../../assets/Grey.jpeg';
import { AuthContext } from '../../context/authContext';
import S3 from 'react-aws-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function EditPost() {
    const { currentUser } = useContext(AuthContext);
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [imageFile2, setImageFile2] = useState(null);
    const [imageURL2, setImageURL2] = useState("");
    const [loggedin, setLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split('/')[2];
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState(null);
    const [gridNumber, setGridNumber] = useState(null)
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [initialImage, setInitialImg] = useState(null);

    const config = {
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImageFile(file ? file : null);
    };

    const handleImageUpload2 = (event) => {
        const file = event.target.files[0];
        setImageFile2(file ? file : null);
    };

    const fetchPost = async () => {
        try {
            const response = await axios.get(`https://soundcheck-backend.onrender.com/api/posts/${id}`);
            setPost(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (location.state != null) {
            setLoggedIn(location.state.loggedIn);
        }
        fetchPost();
    }, [imageFile, imageFile2]);

    const upload = async () => {
        if (imageFile) {
            try {
                const ReactS3Client = new S3(config);
                const data = await ReactS3Client.uploadFile(imageFile, imageFile.name);
                return data.location;
            } catch (err) {
                console.error(err);
                throw err;
            }
        }
        else {
            return imageURL
        }
    };

    const upload2 = async () => {
        if (imageFile2) {
            try {
                const ReactS3Client = new S3(config);
                const data = await ReactS3Client.uploadFile(imageFile2, imageFile2.name);
                return data.location;
            } catch (err) {
                console.error(err);
                throw err;
            }
        }
        else {
            return imageURL2
        }
    };

    const handlePublish = async () => {
        const imgUrl = await upload();
        const imgUrl2 = await upload2();
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        try {
            await axios.put(
                `https://soundcheck-backend.onrender.com/api/posts/${id}`,
                {
                    username: currentUser.username,
                    title,
                    desc: JSON.stringify(rawContentState),
                    img: imgUrl || '', // Use the imgUrl if available, otherwise an empty string
                    homeImg: imgUrl2 || "",
                    date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                    isdraft: 'n',
                    gridNumber: gridNumber
                },
                { withCredentials: true }
            );
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    const handleSave = async () => {
        const imgUrl = await upload();
        const imgUrl2 = await upload2();
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);

        try {
            await axios.put(
                `https://soundcheck-backend.onrender.com/api/posts/${id}`,
                {
                    username: currentUser.username,
                    title,
                    desc: JSON.stringify(rawContentState),
                    img: imgUrl || '', // Use the imgUrl if available, otherwise an empty string
                    homeImg: imgUrl2 || "",
                    date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                    isdraft: 'y',
                    gridNumber: gridNumber
                },
                { withCredentials: true }
            );
        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            console.log(post.gridNumber)
            setGridNumber(post.gridNumber)
            setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(post.desc))));
            if (post.img) {
                setImageURL(`${post.img}`);
            }
            if (post.homeImg) {
                setImageURL2(`${post.homeImg}`)
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
                    {title && <Input
                        labelPlaceholder="Title"
                        bordered
                        css={{ marginBottom: '48px', position: 'relative', mt: '24px' }}
                        onChange={(e) => setTitle(e.target.value)}
                        initialValue={title}
                    />}
                    <Grid alignItems="center" css={{ marginBottom: '2rem', position: 'relative', width: '95vw' }}>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
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
                        style={{ padding: '12px', margin: '0px 0px 24px 0px' }}
                    />

                    <Grid>
                        <Col
                            css={{
                                w: 350,
                            }}
                        >
                            <Text
                                css={{
                                    "@xsMin": {
                                        fontSize: "$lg",
                                    },
                                    "@xsMax": {
                                        fontSize: "$md",
                                    },
                                    fontWeight: "$medium",
                                    padding: "12px",
                                }}
                            >
                                Upload Home Screen Picture
                            </Text>
                            {imageURL2 && (
                                <Image
                                    src={imageURL2}
                                    width={350}
                                    height={275}
                                    css={{
                                        w: "100%",
                                        h: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                            {!imageURL2 && (
                                <Image
                                    src={Grey}
                                    width={350}
                                    height={275}
                                    css={{
                                        w: "100%",
                                        h: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            )}
                        </Col>
                    </Grid>
                    <input 
                        type="file" 
                        label="Upload Home Screen Picture" 
                        onChange={handleImageUpload2} 
                        style={{ padding: "12px", margin: '0px 0px 24px 0px' }} 
                    />
                    {gridNumber && <Input
                        labelPlaceholder="Home Page Grid Number"
                        bordered
                        clearable
                        css={{ marginBottom: "48px", position: "relative", mt: "24px" }}
                        onChange={(e) => setGridNumber(e.target.value)}
                        initialValue={gridNumber}
                    />
                    }

                    
                    <Row
                        css={{
                            jc: 'space-evenly',
                            '@xsMin': {
                                width: '50vw',
                            },
                            padding: "0px 0px 48px 0px"
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

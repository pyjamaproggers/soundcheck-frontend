import React, { useEffect, useState, useContext } from "react";
import { Button, Grid, Image, Input, Text, Col, Row } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";
import Grey from "../../assets/Grey.jpeg";
import { AuthContext } from "../../context/authContext";

export default function WritePost() {
  const { currentUser } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [loggedin, setLoggedIn] = useState(false);
  const location = useLocation();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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

  useEffect(() => {
    if (location.state != null) {
      setLoggedIn(location.state.loggedIn);
    }
  }, []);

  const upload = async () => {
    try {
      const formData = new FormData();
      console.log(imageFile);
      formData.append("file", imageFile);

      const res = await axios.post("https://soundcheck-backend.onrender.com/api/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handlePublish = async () => {
    const imgUrl = await upload();
  
    try {
      const contentState = editorState.getCurrentContent();
      const rawContentState = convertToRaw(contentState);
  
      await axios.post(`https://soundcheck-backend.onrender.com/api/posts/`, {
        isdraft: "n",
        username: currentUser.username,
        title,
        desc: JSON.stringify(rawContentState),
        img: imgUrl || "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleSave = async () => {
    const imgUrl = await upload();
  
    try {
      const contentState = editorState.getCurrentContent();
      const rawContentState = convertToRaw(contentState);
  
      await axios.post(`https://soundcheck-backend.onrender.com/api/posts/`, {
        isdraft: "y",
        username: currentUser.username,
        title,
        desc: JSON.stringify(rawContentState),
        img: imgUrl || "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <>
      {loggedin && (
        <Grid.Container direction="column" alignItems="center" css={{ width: "100vw" }}>
          <Text
            css={{
              "@xsMin": {
                fontSize: "$2xl",
              },
              "@xsMax": {
                fontSize: "$xl",
              },
              fontWeight: "$semibold",
              padding: "24px 48px",
            }}
          >
            What would you like to write about today, {currentUser.username}?
          </Text>
          <Input
            labelPlaceholder="Title"
            bordered
            clearable
            css={{ marginBottom: "48px", position: "relative", mt: "24px" }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Grid alignItems="center" css={{ marginBottom: "2rem", position: "relative" }}>
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
                Upload Cover Picture
              </Text>
              {imageURL && (
                <Image
                  src={imageURL}
                  width={350}
                  height={275}
                  css={{
                    w: "100%",
                    h: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              {!imageURL && (
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
          <input type="file" label="Upload Cover Picture" onChange={handleImageUpload} style={{ padding: "12px" }} />
          <Row
            css={{
              jc: "space-evenly",
              "@xsMin": {
                width: "50vw",
              },
              padding: "48px",
            }}
          >
            <Button
              flat
              auto
              color="primary"
              onPress={() => {
                handleSave();
              }}
            >
              <Text css={{ color: "inherit" }} size={12} weight="bold" transform="uppercase">
                Save draft
              </Text>
            </Button>
            <Button
              flat
              auto
              color="secondary"
              onPress={() => {
                handlePublish();
              }}
            >
              <Text css={{ color: "inherit" }} size={12} weight="bold" transform="uppercase">
                Publish
              </Text>
            </Button>
          </Row>
        </Grid.Container>
      )}

      {!loggedin && (
        <Grid.Container
          css={{
            jc: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <Text
            css={{
              color: "$error",
              "@xsMin": {
                fontSize: "$3xl",
                fontWeight: "$semibold",
              },
              "@xsMax": {
                fontSize: "$xl",
                fontWeight: "$semibold",
              },
            }}
          >
            Access Denied!
          </Text>
          <Text
            css={{
              color: "white",
              "@xsMin": {
                fontSize: "$xl",
                fontWeight: "$medium",
              },
              "@xsMax": {
                fontSize: "$lg",
                fontWeight: "$medium",
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

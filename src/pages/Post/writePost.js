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
import S3 from 'react-aws-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function WritePost() {
    const { currentUser } = useContext(AuthContext);
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [imageFile2, setImageFile2] = useState(null);
    const [imageURL2, setImageURL2] = useState("");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [loggedin, setLoggedIn] = useState(false);
    const location = useLocation();
    const [title, setTitle] = useState("");
    const [gridNumber, setGridNumber] = useState(0)
    const navigate = useNavigate();

    const config = {
        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };

    const handleImageUpload2 = (event) => {
        const file = event.target.files[0];
        setImageFile2(file);
    };

    useEffect(() => {
        if (location.state != null) {
            setLoggedIn(location.state.loggedIn);
        }
    }, [imageFile, imageFile2]);

    const upload = async () => {
        try {
            const ReactS3Client = new S3(config);
            const data = await ReactS3Client.uploadFile(imageFile, imageFile.name);
            return data.location;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const upload2 = async () => {
        try {
            const ReactS3Client = new S3(config);
            const data = await ReactS3Client.uploadFile(imageFile2, imageFile2.name);
            return data.location;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const handlePublish = async () => {
        const imgUrl = await upload();
        const imgUrl2 = await upload2();
        try {
            const contentState = editorState.getCurrentContent();
            const rawContentState = convertToRaw(contentState);

            await axios.post(`https://soundcheck-backend.onrender.com/api/posts/`, {
                isdraft: "n",
                username: currentUser.username,
                title,
                desc: JSON.stringify(rawContentState),
                img: imgUrl || "",
                homeImg: imgUrl2 || "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                gridNumber: gridNumber
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const handleSave = async () => {
        const imgUrl = await upload();
        const imgUrl2 = await upload2();
        try {
            const contentState = editorState.getCurrentContent();
            const rawContentState = convertToRaw(contentState);

            await axios.post(`https://soundcheck-backend.onrender.com/api/posts/`, {
                isdraft: "y",
                username: currentUser.username,
                title,
                desc: JSON.stringify(rawContentState),
                img: imgUrl || "",
                homeImg: imgUrl2 || "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                gridNumber: gridNumber
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
                        css={{ marginBottom: "48px", position: "relative", mt: "24px" }}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Grid alignItems="center" css={{ marginBottom: "2rem", position: "relative", width: '95vw' }}>
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
                        </Col>
                    </Grid>
                    <input type="file" label="Upload Cover Picture" onChange={handleImageUpload} style={{ padding: "12px", margin: '0px 0px 24px 0px' }} />


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
                        </Col>
                    </Grid>
                    <input type="file" label="Upload Home Screen Picture" onChange={handleImageUpload2} style={{ padding: "12px", margin: '0px 0px 24px 0px' }} />


                    <Input
                        labelPlaceholder="Home Page Grid Number"
                        bordered
                        clearable
                        css={{ marginBottom: "48px", position: "relative", mt: "24px" }}
                        onChange={(e) => setGridNumber(e.target.value)}
                    />


                    <Row
                        css={{
                            jc: "space-evenly",
                            "@xsMin": {
                                width: "50vw",
                            },
                            padding: "0px 0px 48px 0px",
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

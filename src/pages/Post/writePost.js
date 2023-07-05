import React, { useEffect, useState } from "react";
import { Button, Grid, Image, Input, Text } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";

export default function WritePost() {
    const [imageURL, setImageURL] = useState(null);
    const [value, setValue] = useState('');
    const [loggedin, setLoggedIn] = useState(false);
    const location = useLocation();
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageURL(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (location.state != null) {
            setLoggedIn(location.state.loggedIn)
        }
    }, [])

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", imageURL);

            const res = await axios.post("http://localhost:8800/api/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };


    const handleSubmit = async (e) => {
        console.log("HANDLING SUBMIT")

        const imgUrl = await upload();

        try {
            await axios.post(`http://localhost:8800/api/posts/`, {
                title,
                desc: value,
                // cat,
                img: imageURL ? imgUrl : "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {loggedin &&
                <Grid.Container direction="column" alignItems="center" css={{ width: "100vw", height: "200vh" }}>
                    <Input
                        label="Title"
                        placeholder="Title"
                        bordered
                        rounded
                        css={{ marginBottom: "2rem", position: "relative" }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Grid alignItems="center" css={{ marginBottom: "2rem", position: "relative" }}>
                        <ReactQuill theme="snow" value={value} onChange={setValue} defaultValue="Post Content" placeholder="Post Content" style={{ marginBottom: "2rem", position: "relative", height: "50vh", width: "50vw" }} />
                    </Grid>
                    <Input
                        type="file"
                        label="Post Cover Picture"
                        onChange={handleImageUpload}
                        bordered
                        rounded
                        css={{ marginBottom: "2rem", position: "relative" }}
                    />
                    {imageURL && (
                        <Image
                            src={imageURL}
                            width="100%"
                            height="auto"
                            css={{ marginBottom: "2rem" }}
                        />
                    )}
                    <Button css={{ marginBottom: "2rem", position: "relative" }}>
                        Save as Draft
                    </Button>
                    <Button onPress={handleSubmit}>
                        Publish
                    </Button>
                </Grid.Container>
            }
            {!loggedin &&
                <Grid.Container css={{
                    justifyContent: 'center',
                    width: '100vw',
                    height: '90vh',
                    alignItems: 'center'
                }}>
                    <Text css={{
                        '@xsMin': {
                            fontSize: '$4xl',
                            color: '$error',
                            fontWeight: '$medium'
                        },
                        '@xsMax': {
                            fontSize: '$xl',
                            color: '$error',
                            fontWeight: '$medium'
                        }
                    }}>
                        Error. Please log in first to write a post!
                    </Text>
                </Grid.Container>
            }
        </>
    );
}

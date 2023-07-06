import React, { useEffect, useState } from "react";
import { Button, Grid, Image, Input, Text, Col, Row } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";
import Grey from '../../assets/Grey.jpeg'

export default function WritePost() {
    const [imageURL, setImageURL] = useState(null);
    const [value, setValue] = useState('');
    const [loggedin, setLoggedIn] = useState(false);
    const location = useLocation();
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file)
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageURL(reader.result);
        };

        if (file) {
            console.log(reader.readAsDataURL(file))
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
        console.log(imageURL)

        try {
            await axios.post(`http://localhost:8800/api/posts/`, {
                username: 'aryan',
                title,
                desc: value,
                // cat,
                img: imageURL ? imageURL : "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                isdraft: 'n',
            });
            // navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {loggedin &&
                <Grid.Container direction="column" alignItems="center" css={{ width: "100vw" }}>
                    <Text css={{
                        '@xsMin': {
                            fontSize: '$2xl',
                        },
                        '@xsMax': {
                            fontSize: '$xl'
                        },
                        fontWeight: '$semibold',
                        padding: '24px 48px'
                    }}>
                        What would you like to write about today, user.name?
                    </Text>
                    <Input
                        labelPlaceholder="Title"
                        bordered
                        clearable
                        css={{ marginBottom: "48px", position: "relative", mt: '24px' }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Grid alignItems="center" css={{ marginBottom: "2rem", position: "relative" }}>
                        <ReactQuill theme="snow" value={value} onChange={setValue} defaultValue="Post Content" placeholder="Post Content" style={{ marginBottom: "2rem", position: "relative", height: "50vh", width: "90vw" }} />
                    </Grid>
                    <Grid>
                        <Col css={{
                            w: 350
                        }}>
                            <Text css={{
                                '@xsMin': {
                                    fontSize: '$lg',
                                },
                                '@xsMax': {
                                    fontSize: '$md'
                                },
                                fontWeight: '$medium',
                                padding: '12px'
                            }}>
                                Upload Cover Picture
                            </Text>
                            {imageURL && (
                                <Image src={imageURL} width={350} height={275}
                                    css={{
                                        w: '100%',
                                        h: '100%',
                                        objectFit: 'cover'
                                    }} />
                            )}
                            {!imageURL && (
                                <Image src={Grey} width={350} height={275}
                                    css={{
                                        w: '100%',
                                        h: '100%',
                                        objectFit: 'cover'
                                    }} />
                            )}
                        </Col>
                    </Grid>
                    <input
                        type="file"
                        label="Upload Cover Picture"
                        onChange={handleImageUpload}
                        style={{ padding: '12px' }}
                    />
                    <Row css={{
                        jc: 'space-evenly',
                        '@xsMin':{
                            width: '50vw',
                        },
                        padding: '48px'
                    }}>
                        <Button flat auto color="primary"
                            onPress={() => {
                                // upload post details to database with the user username ofc and "isdraft" as "y"
                            }}>
                            <Text
                                css={{ color: "inherit" }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                            >
                                Save draft
                            </Text>
                        </Button>
                        <Button flat auto color="secondary"
                            onPress={() => {
                                // upload post details to database with the user username ofc and "isdraft" as "n"
                            }}>
                            <Text
                                css={{ color: "inherit" }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                            >
                                Publish
                            </Text>
                        </Button>
                    </Row>
                </Grid.Container>
            }

            {!loggedin &&
                <Grid.Container css={{
                    jc: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    flexDirection: 'column'
                }}>
                    <Text css={{
                        color: '$error',
                        "@xsMin": {
                            fontSize: '$3xl',
                            fontWeight: '$semibold'
                        },
                        '@xsMax': {
                            fontSize: '$xl',
                            fontWeight: '$semibold'
                        }
                    }}>
                        Access Denied!
                    </Text>
                    <Text css={{
                        color: 'white',
                        "@xsMin": {
                            fontSize: '$xl',
                            fontWeight: '$medium'
                        },
                        '@xsMax': {
                            fontSize: '$lg',
                            fontWeight: '$medium'
                        }
                    }}>
                        Please login first.
                    </Text>
                </Grid.Container>
            }
        </>
    );
}

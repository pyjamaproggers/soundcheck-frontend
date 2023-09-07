import React, { useEffect, useState } from "react";
import { Grid, Image, Text, Row, Container, Col } from "@nextui-org/react";
import TempLogo from "../../assets/TempLogo.jpeg";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, FaSpotify, } from 'react-icons/fa';
import { SiApple, SiApplemusic } from 'react-icons/si'
import './post.css';
import Divine from '../../assets/Divine.jpeg';
import { Scroll } from 'react-scroll-component';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { convertFromRaw, EditorState, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import "@fontsource/oswald"; // Defaults to weight 400
import "@fontsource/oswald/400.css"; // Specify weight

export default function Post() {
    const location = useLocation();
    const current = new Date();
    const [month, setMonth] = useState('');
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [post, setPost] = useState(null);
    const id = location.pathname.split("/")[2];
    const [publishedPosts, setPublishedPosts] = useState();
    const [dateLatest, setDateLatest] = useState(true);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();


    const segregatePosts = async () => {
        const published = posts.filter((Post) => Post.isdraft === 'n' && Post._id !== id);
        setPublishedPosts(published);
    };

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://soundcheck-backend.onrender.com/api/posts');
            setPosts(response.data);
            await segregatePosts(); // Call segregatePosts after setting the posts state
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        segregatePosts();
    }, [posts]);

    useEffect(() => {
        fetchPosts();
    }, [post]);

    const setDate = () => {
        const current = new Date();
        const monthNumber = current.getMonth() + 1;

        if (monthNumber === 1) {
            setMonth('January');
        } else if (monthNumber === 2) {
            setMonth('February');
        } else if (monthNumber === 3) {
            setMonth('March');
        } else if (monthNumber === 4) {
            setMonth('April');
        } else if (monthNumber === 5) {
            setMonth('May');
        } else if (monthNumber === 6) {
            setMonth('June');
        } else if (monthNumber === 7) {
            setMonth('July');
        } else if (monthNumber === 8) {
            setMonth('August');
        } else if (monthNumber === 9) {
            setMonth('September');
        } else if (monthNumber === 10) {
            setMonth('October');
        } else if (monthNumber === 11) {
            setMonth('November');
        } else if (monthNumber === 12) {
            setMonth('December');
        } else {
            // Handle invalid month number
            setMonth('Unknown');
        }
    };


    const fetchPost = async () => {
        try {
            const response = await axios.get(`https://soundcheck-backend.onrender.com/api/posts/${id}`);
            setPost(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPost();
        setDate();
    }, []);

    useEffect(() => {
        fetchPost();
        setDate();
    }, [id]);

    const renderPostContent = () => {
        if (!post) {
            return null;
        }

        const contentState = convertFromRaw(JSON.parse(post.desc));
        var htmlContent = stateToHTML(contentState).trim();

        function extractTwitterEmbed() {
            var mySubString = htmlContent.substring(
                htmlContent.indexOf(`&lt;blockquote class="twitter-tweet"`),
                htmlContent.indexOf("&lt;/script&gt;") + 15
            );
            var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            htmlContent = htmlContent.replace(mySubString, decodedSubString)

        };

        function extractInstagramEmbed() {
            var mySubString = htmlContent.substring(
                htmlContent.indexOf(`&lt;blockquote class="instagram-media"`),
                htmlContent.indexOf("&lt;/script&gt;") + 15
            );
            var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            htmlContent = htmlContent.replace(mySubString, decodedSubString)
        };

        function extractYoutubeEmbed() {
            var mySubString = htmlContent.substring(
                htmlContent.indexOf(`&lt;iframe width="560"`),
                htmlContent.indexOf("allowfullscreen&gt;&lt;/iframe&gt;") + 36
            );  
            var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            htmlContent = htmlContent.replace(mySubString, decodedSubString)
        };

        function extractAppleMusicEmbed() {
            var mySubString = htmlContent.substring(
                htmlContent.indexOf(`&lt;iframe allow="autoplay`),
                htmlContent.indexOf(`"&gt;&lt;/iframe&gt;`) + 21
            );
            var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            htmlContent = htmlContent.replace(mySubString, decodedSubString)
        };

        function extractSpotifyEmbeds() {
            var mySubString = htmlContent.substring(
                htmlContent.indexOf(`&lt;iframe allow="autoplay`),
                htmlContent.indexOf(`loading="lazy"&gt;&lt;/iframe&gt;`) + 36
            );
            var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            htmlContent = htmlContent.replace(mySubString, decodedSubString)
        };

        extractInstagramEmbed()
        extractTwitterEmbed()
        extractYoutubeEmbed()
        extractAppleMusicEmbed()
        extractSpotifyEmbeds()

        const renderedContent = (
            <Grid.Container css={{
                jc: 'center',
                fontFamily:"Oswald"
            }}>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}
                    className="post-content" 
                    style={{ fontFamily: "Oswald" }}
                />
            </Grid.Container>
        );

        return (
            <Grid.Container>
                <Text css={{ fontWeight: '$semibold', fontSize: '$3xl', height: 'max-content' , fontFamily:"Oswald"}}>
                    {post.title}
                </Text>
                <Image
                    src={`${post.img}`}
                    // width={500}
                    // height={400}
                    css={{
                        maxH: '500px',
                        objectFit: 'cover',
                    }}
                />
                <div style={{ marginTop: "48px" }}>
                    {renderedContent}
                </div>
            </Grid.Container>
        );
    };

    return (
        <>
            <div className="post-desktop">
                <Grid.Container
                    css={{
                        jc: 'space-between',
                        width: '100vw',
                        height: 'max-content',
                        marginBottom: '64px'
                    }}
                >
                    <Grid.Container
                        css={{
                            margin: '16px 16px 16px 16px',
                            width: '22vw',
                            textAlign: 'center',
                            padding: '8px',
                            height: 'max-content',
                            float: 'left',
                            backgroundColor: 'rgb(20,20,20)'
                        }}
                        direction="column"
                    >
                        <Text css={{ fontWeight: '$semibold', fontSize: '$xl' , fontFamily:"Oswald"}}>
                            {month} {current.getDate()}, {current.getFullYear()}
                        </Text>
                        <Grid.Container css={{ alignItems: 'center', jc: 'center', p: '8px 0px 16px 0px' }}>
                            <Grid>
                                <Image
                                    css={{
                                        width: '150px',
                                        height: '70px',
                                        borderRadius: '0px',
                                        objectFit: 'cover'
                                    }}
                                    src={TempLogo}
                                />
                            </Grid>
                        </Grid.Container>
                        <Grid.Container css={{ justifyContent: 'center' }}>
                            <Grid>
                                <FaSpotify className="icon" size={'24px'} />
                            </Grid>
                            <Grid>
                                <FaInstagram className="icon" size={'24px'} />
                            </Grid>
                            <Grid>
                                <FaTwitter className="icon" size={'24px'} />
                            </Grid>
                            <Grid>
                                <SiApplemusic className="icon" size={'24px'} />
                            </Grid>
                        </Grid.Container>
                    </Grid.Container>

                    <Scroll direction="vertical" height="100vh">
                        <Grid.Container css={{
                            width: '50vw',
                            height: 'max-content',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Col css={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {renderPostContent()}
                            </Col>
                        </Grid.Container>
                    </Scroll>

                    {publishedPosts && publishedPosts.length > 4 &&
                        <Grid.Container css={{ width: '22vw', jc: 'center', maxHeight: '100px', float: "right", marginRight: "20px" }}>
                            <Text css={{ fontWeight: '$semibold', fontSize: '$lg', margin: '8px 0px', fontFamily:"Oswald" }}>
                                MORE BY SoundCheck
                            </Text>

                            {publishedPosts.map((post, index) => {
                                if (index <= 6) {
                                    return (
                                        <Grid css={{ width: '100%', cursor: 'pointer' }} onClick={() => {
                                            navigate(`/posts/${post._id}`);
                                        }}>
                                            
                                            <Row css={{
                                                padding: '0px 4px 0px 0px',
                                                borderStyle: 'solid',
                                                borderWidth: '2px',
                                                borderColor: 'rgb(20,20,20)',
                                                margin: '8px',
                                            }}>
                                                <Image src={post.homeImg} css={{ height: '91px', width: '200px', objectFit: 'cover' }} />
                                                <Text className="multiline-ellipsis" css={{ fontFamily:"Oswald", fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px', marginLeft: "5px", width: '100%' }}>
                                                    {post.title}
                                                </Text>
                                            </Row>
                                        </Grid>
                                    )
                                }
                            })}
                        </Grid.Container>
                    }
                </Grid.Container>
            </div>

            <div className="tablet">
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    jc: 'center',
                    alignItems: 'center'
                }}>

                    <Grid.Container css={{ width: '100vw', jc: 'center', padding: '5%' }}>
                        {renderPostContent()}
                    </Grid.Container>

                    {publishedPosts && publishedPosts.length > 4 &&
                        <Grid.Container css={{ width: '85vw', jc: 'center',}}>
                            <Text css={{ fontWeight: '$semibold', fontSize: '$lg', margin: '8px 0px' , fontFamily:"Oswald"}}>
                                MORE BY SoundCheck
                            </Text>

                            {publishedPosts.map((post, index) => {
                                if (index <= 7) {
                                    return (
                                        <Grid css={{ width: '100%', cursor: 'pointer' }} onClick={() => {
                                            navigate(`/posts/${post._id}`);
                                        }}>
                                            <Row css={{
                                                padding: '0px 4px 0px 0px',
                                                borderStyle: 'solid',
                                                borderWidth: '2px',
                                                borderColor: 'rgb(20,20,20)',
                                                margin: '8px',
                                                alignItems: 'center'
                                            }} >
                                                <Image src={post.homeImg} css={{ height: '91px', width: '200px', objectFit: 'cover' }} />
                                                <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px', marginLeft: "5px", width: '100%' , fontFamily:"Oswald"}}>
                                                    {post.title}
                                                </Text>
                                            </Row>
                                        </Grid>
                                    )
                                }
                            })}
                        </Grid.Container>
                    }

                </Col>
            </div>
        </>
    );
}

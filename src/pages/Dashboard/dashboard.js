import { Col, Grid, Text, Card, Row, Button, Input, Container, Loading, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Divine from '../../assets/Divine.jpeg'
import '../Post/post.css'
import AB171 from '../../assets/AB171.jpeg'
import AB172 from '../../assets/AB172.jpeg'
import Temp8 from '../../assets/Temp8.png'
import Temp9 from '../../assets/Temp9.png'
import Temp10 from '../../assets/Temp10.png'
import Temp11 from '../../assets/Temp11.png'
import Temp6 from '../../assets/Temp6.png'
import './dashboard.css';
import SpotifyPlayer from "react-spotify-player"
import SpotifyIcon from '../../assets/spotify.png'
import AppleMusicIcon from '../../assets/applemusic.png'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
    const [fetching, setFetching] = useState(true)
    const [newSpotifyLink, setNewSpotifyLink] = useState('')
    const [spotifyButton, setSpotifyButton] = useState(true)
    const [showSpotifyInput, setShowSpotifyInput] = useState(false)

    const [newAppleMusicLink, setNewAppleMusicLink] = useState('')
    const [appleMusicButton, setAppleMusicButton] = useState(true)
    const [showAppleMusicInput, setShowAppleMusicInput] = useState(false)

    const [publishedPosts, setPublishedPosts] = useState()
    const [draftPosts, setDraftPosts] = useState()

    const [spotifyLinks, setSpotifyLinks] = useState()
    const [appleMusicLinks, setAppleMusicLinks] = useState()
    const [posts, setPosts] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const playlists = [
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/2BSzF6sRfEKksO30Iv1Hoq?si=c93a139bcbea46f7',
        },
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX2RahGIyQXcJ?si=48ad789c15384dee',
        },
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX1ct2TQrAvRf?si=2d1551b1e08148a1',
        },
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/43FJRpUKaBOSWJsbZzOiNo?si=d0b0449b2c814392',
        },
        {
            platform: 'AppleMusic',
            link: 'https://embed.music.apple.com/in/playlist/2010s-indian-hip-hop-essentials/pl.99742817f93b402395e63e963fb33cd2',
        },
        {
            platform: 'AppleMusic',
            link: 'https://embed.music.apple.com/in/playlist/top-25-mumbai/pl.db537759ae3341eaa600bc5482209f7c',
        },

    ]
    // pull all playlists links from the database and segregate the ones uploaded by the current logged in user into a state varible array
    // so that it likes like the array above

    // const posts = [
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 1',
    //         desc: '',
    //         image: Divine,
    //         isdraft: 'n',
    //         date: '',
    //     },
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 2',
    //         desc: '',
    //         image: AB171,
    //         isdraft: 'n',
    //         date: '',
    //     },
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 3',
    //         desc: '',
    //         image: AB172,
    //         isdraft: 'n',
    //         date: '',
    //     },
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 4',
    //         desc: '',
    //         image: Temp8,
    //         isdraft: 'y',
    //         date: '',
    //     },
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 5',
    //         desc: '',
    //         image: Temp9,
    //         isdraft: 'y',
    //         date: '',
    //     },
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 6',
    //         desc: '',
    //         image: Temp10,
    //         isdraft: 'n',
    //         date: '',
    //     },
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 7',
    //         desc: '',
    //         image: Temp11,
    //         isdraft: 'y',
    //         date: '',
    //     },
    //     {
    //         id: '',
    //         username: 'aryan',
    //         title: 'Post 8',
    //         desc: '',
    //         image: Temp6,
    //         isdraft: 'n',
    //         date: '',
    //     },
    // ]

    const size = {
        width: '100%',
        height: 80,
    };


    const handleSpotifyChange = (event) => {
        setNewSpotifyLink(event.target.value)
        if (event.target.value != 0) {
            setSpotifyButton(false)
        }
        if (event.target.value == 0) {
            setSpotifyButton(true)
        }
    }

    const handleAppleMusicChange = (event) => {
        setNewAppleMusicLink(event.target.value.slice(0, 8) + 'embed.' + event.target.value.slice(8))
        if (event.target.value != 0) {
            setAppleMusicButton(false)
        }
        if (event.target.value == 0) {
            setAppleMusicButton(true)
        }
    }

    const SegregatePosts = () => {
        var published = []
        var drafts = []
        var i
        for (i = 0; i < posts.length; i++) {
            if (posts[i].isdraft == 'n') {
                published.push(posts[i])
            }
            else {
                drafts.push(posts[i])
            }
        }
        setPublishedPosts(published)
        setDraftPosts(drafts)
    }

    const SegregatePlaylists = () => {
        var spotify = []
        var applemusic = []
        var i
        for (i = 0; i < playlists.length; i++) {
            if (playlists[i].platform == 'Spotify') {
                spotify.push(playlists[i])
            }
            else {
                applemusic.push(playlists[i])
            }
        }
        setSpotifyLinks(spotify)
        setAppleMusicLinks(applemusic)
    }

    const fetchPosts = async () =>
    {
        try{
            const response = await axios.get("https://soundcheck-backend.onrender.com/api/posts");
            console.log("RESP"+response.data)
            setPosts(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    useEffect(() => {
        SegregatePosts();
        window.setTimeout(() => {
            SegregatePosts()
            SegregatePlaylists()
            setFetching(false)
        }, 2000)
      }, [posts]);

    useEffect(() => {
        setFetching(true)
        fetchPosts()
    }, [])

    return (
        <>
            {/* If user logged in (check via context api) then show the dashboard (all posts saved by that username)*/}
            <Grid.Container>

                <Col css={{
                    margin: '0px 24px 12px 24px',
                    padding: '36px 0px 36px 0px',
                    borderStyle: 'solid',
                    borderWidth: '0px 0px 1px 0px',
                    borderColor: '$gray100'
                }}>
                    <Text css={{
                        '@xsMax': {
                            fontSize: '$xl',
                            fontWeight: '$semibold'
                        },
                        '@xsMin': {
                            fontSize: '$2xl',
                            fontWeight: '$semibold'
                        }
                    }}>
                        Welcome, {currentUser.username}
                    </Text>
                    <Text css={{
                        '@xsMax': {
                            fontSize: '$md',
                        },
                        '@xsMin': {
                            fontSize: '$lg',
                        }
                    }}>
                        Here you can create a new post, edit your already published posts or continue your saved drafts.
                    </Text>
                    <Button flat auto color='error'
                        css={{
                            m: '12px 0px 0px 0px',
                            color: "white",
                            bg: "#300313",
                            zIndex: 1
                        }}
                        onPress={() => {
                            //navigate to write post component for user to create a new post
                            navigate("/writepost", { state: { loggedIn: true } });
                        }}>
                        <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                        >
                            Creat new post
                        </Text>
                    </Button>
                </Col>

                <div className="published-sector" >
                    <Grid.Container >

                        <Col css={{
                            textAlign: 'center',
                            padding: '0px 0px 36px 0px'
                        }}>
                            <Text css={{
                                '@xsMax': {
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold'
                                },
                                '@xsMin': {
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold'
                                },
                                color: '$success'
                            }}>
                                Published
                            </Text>

                            <Grid.Container css={{
                                jc: 'center'
                            }}>
                                {fetching &&
                                    <Loading css={{ padding: '16px 0px' }} color={'white'} size="lg" />
                                }

                                {/* map over the posts and for every post display the grid below like i've shown for reference */}

                                {publishedPosts && !fetching &&
                                    <>
                                        {publishedPosts.map((post, index) => (
                                            <Grid css={{
                                                margin: '24px 16px',
                                            }} key={index}>
                                                <Card css={{
                                                    '@smMin': {
                                                        w: "350px",
                                                        h: "300px"
                                                    },
                                                    '@smMax': {
                                                        w: "250px",
                                                        h: "175px"
                                                    },
                                                }} isPressable
                                                    onPress={() => {
                                                        navigate(`/posts/${post._id}`)
                                                        // navigate to the post live (published) page
                                                    }}>
                                                    <Card.Body css={{ p: 0 }}>
                                                        <Card.Image
                                                            src={`${post.img.imageUrl}`}
                                                            width="100%"
                                                            height="100%"
                                                            objectFit="cover"
                                                            alt="Card example background"
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer
                                                        isBlurred
                                                        css={{
                                                            position: "absolute",
                                                            bgBlur: "#00000077",
                                                            bottom: 0,
                                                            zIndex: 1,
                                                        }}
                                                    >
                                                        <Row css={{
                                                            alignItems: 'center'
                                                        }}>
                                                            <Col css={{
                                                                '@smMin': {
                                                                    w: "275px",
                                                                },
                                                                '@smMax': {
                                                                    w: "100px",
                                                                },
                                                            }}>
                                                                <Text color="#fff" css={{
                                                                    fontSize: '$lg',
                                                                    fontWeight: '$semibold',
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',

                                                                }} className="multiline-ellipses">
                                                                    {post.title}
                                                                </Text>
                                                            </Col>
                                                            <Col>
                                                                <Row justify="flex-end">
                                                                    <Button flat auto color="primary"
                                                                        onPress={() => {
                                                                            // navigate to the write post component but with this post's details
                                                                            // so that the text editor already has this post's title, desc, 
                                                                            // image etc filled in for the user to edit
                                                                            navigate(`/editpost/${post._id}`, { state: { loggedIn: true } });
                                                                        }}>
                                                                        <Text
                                                                            css={{ color: "inherit" }}
                                                                            size={12}
                                                                            weight="bold"
                                                                            transform="uppercase"
                                                                        >
                                                                            Edit
                                                                        </Text>
                                                                    </Button>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </>
                                }

                            </Grid.Container>
                        </Col>

                    </Grid.Container>
                </div>

                <div className="draft-sector">
                    <Grid.Container className="draft-sector" >
                        <Col css={{
                            textAlign: 'center',
                            padding: '0px 0px 36px 0px'
                        }}>
                            <Text css={{
                                '@xsMax': {
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold'
                                },
                                '@xsMin': {
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold'
                                },
                                color: '$warning'
                            }}>
                                Drafts
                            </Text>

                            <Grid.Container css={{
                                jc: 'center'
                            }}>
                                {fetching &&
                                    <Loading css={{ padding: '16px 0px' }} color={'white'} size="lg" />
                                }

                                {/* map over the posts and for every post display the grid below like i've shown for reference */}
                                {draftPosts && !fetching &&
                                    <>
                                        {draftPosts.map((post, index) => (
                                            <Grid css={{
                                                margin: '24px 8px',
                                            }}>
                                                <Card className="draft-card" css={{
                                                    '@smMin': {
                                                        w: "450px",
                                                        h: "300px"
                                                    },
                                                    '@smMax': {
                                                        w: "250px",
                                                        h: "175px"
                                                    },
                                                }}>
                                                    <Card.Body css={{ p: 0 }}>
                                                        <Card.Image
                                                            src={`https://soundcheck-backend.onrender.com/${post.img.imageUrl}`}
                                                            width="100%"
                                                            height="100%"
                                                            objectFit="cover"
                                                            alt="Card example background"
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer
                                                        isBlurred
                                                        css={{
                                                            position: "absolute",
                                                            bgBlur: "#00000077",
                                                            bottom: 0,
                                                            zIndex: 1,
                                                        }}
                                                    >
                                                        <Row css={{ alignItems: 'center' }}>
                                                            <Col css={{
                                                                '@smMin': {
                                                                    w: "170px",
                                                                },
                                                                '@smMax': {
                                                                    w: "50px",
                                                                },
                                                            }}>
                                                                <Text color="#fff" css={{
                                                                    fontSize: '$lg',
                                                                    fontWeight: '$semibold',
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',

                                                                }} className="multiline-ellipses">
                                                                    {post.title}
                                                                </Text>
                                                            </Col>
                                                            <Col>
                                                                <Row justify="flex-end" >
                                                                    <Button flat auto color="primary"
                                                                        css={{
                                                                            mr: '6px'
                                                                        }}
                                                                        onPress={() => {
                                                                            // navigate to the write post component but with this post's details
                                                                            // so that the text editor already has this post's title, desc, 
                                                                            // image etc filled in for the user to edit
                                                                        }}>
                                                                        <Text
                                                                            css={{ color: "inherit" }}
                                                                            size={12}
                                                                            weight="bold"
                                                                            transform="uppercase"
                                                                        >
                                                                            Edit
                                                                        </Text>
                                                                    </Button>
                                                                    <Button flat auto
                                                                        css={{
                                                                            ml: '6px'
                                                                        }}
                                                                        // css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                                                        color='secondary'
                                                                        onPress={() => {
                                                                            // publish the post which would basically mean updating the post's,
                                                                            // data structure item "isdraft" to "n" from "y"
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
                                                            </Col>
                                                        </Row>
                                                    </Card.Footer>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </>
                                }

                            </Grid.Container>
                        </Col>
                    </Grid.Container>
                </div>

                <div className="playlists-sector">
                    <Grid.Container css={{
                        padding: '0px 0px 36px 0px',
                    }}>
                        <Col css={{
                            textAlign: 'center',
                            margin: '0px 24px',
                            borderStyle: 'solid',
                            borderWidth: '1px 0px 0px 0px',
                            borderColor: '$gray100'
                        }}>
                            <Text css={{
                                '@xsMax': {
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold'
                                },
                                '@xsMin': {
                                    fontSize: '$2xl',
                                    fontWeight: '$semibold'
                                },
                                padding: '12px 0px',
                                color: '#94f9f0'
                            }}>
                                Music Playlists
                            </Text>

                            <Grid.Container css={{
                                jc: 'center'
                            }}>
                                {fetching &&
                                    <Loading css={{ padding: '16px 0px' }} color={'white'} size="lg" />
                                }

                                {spotifyLinks && !fetching &&
                                    <>
                                        {spotifyLinks.map((playlist, index) => (
                                            <Grid css={{
                                                m: '24px',
                                                '@xsMax': {
                                                    width: 275
                                                },
                                                '@xsMin': {
                                                    width: 450
                                                }
                                            }} key={index}>

                                                <Col>
                                                    <SpotifyPlayer
                                                        uri={playlist.link}
                                                        size={size}
                                                        view="list"
                                                        theme="black"
                                                    />
                                                    <Button flat auto color="error"
                                                        css={{
                                                            m: '12px',
                                                            zIndex: 1
                                                        }}
                                                        onPress={() => {
                                                            // delete this spotify link from the spotify table (collection)
                                                        }}>
                                                        <Text
                                                            css={{ color: "inherit" }}
                                                            size={12}
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Delete
                                                        </Text>
                                                    </Button>
                                                </Col>
                                            </Grid>
                                        ))}
                                    </>
                                }
                                {appleMusicLinks && !fetching &&
                                    <>
                                        {appleMusicLinks.map((playlist, index) => (
                                            <Grid css={{
                                                m: '24px',
                                                '@xsMax': {
                                                    width: 275
                                                },
                                                '@xsMin': {
                                                    width: 450
                                                }
                                            }} key={index}>

                                                <Col>
                                                    <iframe
                                                        allow="autoplay *; encrypted-media *;"
                                                        frameborder="0"
                                                        height="160"
                                                        style={{ width: '100%', overflow: 'hidden', background: 'transparent' }}
                                                        src={playlist.link}></iframe>
                                                    <Button flat auto color="error"
                                                        css={{
                                                            m: '12px',
                                                            zIndex: 1
                                                        }}
                                                        onPress={() => {
                                                            // delete this spotify link from the spotify table (collection)
                                                        }}>
                                                        <Text
                                                            css={{ color: "inherit" }}
                                                            size={12}
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Delete
                                                        </Text>
                                                    </Button>
                                                </Col>
                                            </Grid>
                                        ))}
                                    </>
                                }
                            </Grid.Container>

                            {!fetching &&
                                <Grid.Container css={{
                                    jc: 'center',
                                }}>
                                    <Col css={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        jc: 'center',
                                        '@xsMax': {
                                            width: 275
                                        },
                                        '@xsMin': {
                                            width: 450
                                        }
                                    }}>
                                        <Row css={{
                                            jc: 'space-evenly'
                                        }}>
                                            <Button flat auto
                                                css={{
                                                    m: '24px',
                                                    color: "#191414",
                                                    bg: "#1db954"
                                                }}
                                                onPress={() => {
                                                    setShowSpotifyInput(true)
                                                    setShowAppleMusicInput(false)
                                                    setNewSpotifyLink('')
                                                    setNewAppleMusicLink('')
                                                }}>
                                                <Row 
                                                css={{
                                                    alignItems: 'center',
                                                    jc: 'space-evenly'
                                                }}>
                                                    <Image src={SpotifyIcon} css={{w: '30px', h: '30px'}}/>
                                                    <Text
                                                        css={{ color: "inherit", pl: '4px' }}
                                                        size={12}
                                                        weight="bold"
                                                        transform="uppercase"
                                                    >
                                                        Add Spotify Link
                                                    </Text>

                                                </Row>
                                            </Button>

                                            <Button flat auto
                                                css={{
                                                    m: '24px',
                                                    color: "white",
                                                    bg: "#fc3c44"
                                                }}
                                                onPress={() => {
                                                    setShowAppleMusicInput(true)
                                                    setShowSpotifyInput(false)
                                                    setNewSpotifyLink('')
                                                    setNewAppleMusicLink('')
                                                }}>
                                                <Row 
                                                css={{
                                                    alignItems: 'center',
                                                    jc: 'space-evenly'
                                                }}>
                                                    <Image src={AppleMusicIcon} css={{w: '35px', h: '35px'}}/>
                                                    <Text
                                                        css={{ color: "inherit", pl: '4px' }}
                                                        size={12}
                                                        weight="bold"
                                                        transform="uppercase"
                                                    >
                                                        Add Apple Music
                                                    </Text>

                                                </Row>
                                            </Button>
                                        </Row>


                                        {showSpotifyInput &&
                                            <>
                                                <Input labelPlaceholder="New Spotify Playlist Link"
                                                    css={{
                                                        m: '24px'
                                                    }}
                                                    onChange={handleSpotifyChange} clearable/>
                                                {
                                                    newSpotifyLink &&
                                                    <Grid.Container >
                                                        <Text css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            Preview:
                                                        </Text>
                                                        <SpotifyPlayer
                                                            uri={newSpotifyLink}
                                                            size={size}
                                                            view="list"
                                                            theme="black"
                                                        />
                                                    </Grid.Container>
                                                }
                                                <Grid.Container css={{
                                                    jc: 'center'
                                                }}>
                                                    <Button flat auto color="success" disabled={spotifyButton}
                                                        css={{
                                                            m: '24px'
                                                        }}
                                                        onPress={() => {
                                                            // add this spotify link to the spotify table with the username of the user
                                                            // currently logged in
                                                        }}>
                                                        <Text
                                                            css={{ color: "inherit" }}
                                                            size={12}
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Add Playlist
                                                        </Text>
                                                    </Button>
                                                </Grid.Container>
                                            </>
                                        }


                                        {showAppleMusicInput &&
                                            <>
                                                <Input labelPlaceholder="New Apple Music Playlist Link"
                                                    css={{
                                                        m: '24px'
                                                    }}
                                                    onChange={handleAppleMusicChange} clearable/>
                                                {
                                                    newAppleMusicLink &&
                                                    <Grid.Container >
                                                        <Text css={{
                                                            fontSize: '$lg',
                                                            fontWeight: '$semibold'
                                                        }}>
                                                            Preview:
                                                        </Text>
                                                        <iframe
                                                            allow="autoplay *; encrypted-media *;"
                                                            frameborder="0"
                                                            height="160"
                                                            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
                                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                                            src={newAppleMusicLink}></iframe>
                                                    </Grid.Container>
                                                }
                                                <Grid.Container css={{
                                                    jc: 'center'
                                                }}>
                                                    <Button flat auto color="success" disabled={appleMusicButton}
                                                        css={{
                                                            m: '24px'
                                                        }}
                                                        onPress={() => {
                                                            // add this apple music link to the playlists table with the username of the user
                                                            // currently logged in
                                                        }}>
                                                        <Text
                                                            css={{ color: "inherit" }}
                                                            size={12}
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Add Playlist
                                                        </Text>
                                                    </Button>
                                                </Grid.Container>
                                            </>
                                        }

                                    </Col>
                                </Grid.Container>
                            }
                        </Col>
                    </Grid.Container>
                </div>

            </Grid.Container>
            {/* If user not logged in (check via context api) then show the below component (error message)*/}
            {/* <Grid.Container css={{
            jc: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            flexDirection: 'column'
        }}>
            <Text css={{
                color: '$error',
                "@xsMin":{
                    fontSize: '$3xl',
                    fontWeight: '$semibold'
                },
                '@xsMax':{
                    fontSize: '$xl',
                    fontWeight: '$semibold'
                }
            }}>
                Access Denied!
            </Text>
            <Text css={{
                color: 'white',
                "@xsMin":{
                    fontSize: '$xl',
                    fontWeight: '$medium'
                },
                '@xsMax':{
                    fontSize: '$lg',
                    fontWeight: '$medium'
                }
            }}>
                Please login first.
            </Text>
        </Grid.Container> */}
        </>
    )
}
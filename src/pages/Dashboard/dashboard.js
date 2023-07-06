import { Col, Grid, Text, Card, Row, Button, Input, Container } from "@nextui-org/react";
import React, { useState } from "react";
import Divine from '../../assets/Divine.jpeg'
import '../Post/post.css'
import AB171 from '../../assets/AB171.jpeg'
import './dashboard.css';
import SpotifyPlayer from "react-spotify-player"

export default function Dashboard() {
    const [newSpotifyLink, setNewSpotifyLink] = useState('')
    const [spotifyButton, setSpotifyButton] = useState(true)
    const [showSpotifyInput, setShowSpotifyInput] = useState(false)

    const [newAppleMusicLink, setNewAppleMusicLink] = useState('')
    const [appleMusicButton, setAppleMusicButton] = useState(true)
    const [showAppleMusicInput, setShowAppleMusicInput] = useState(false)

    const userSPPlaylistsLinks = [
        'https://open.spotify.com/playlist/2BSzF6sRfEKksO30Iv1Hoq?si=c93a139bcbea46f7',
        'https://open.spotify.com/playlist/37i9dQZF1DX2RahGIyQXcJ?si=48ad789c15384dee',
        'https://open.spotify.com/playlist/37i9dQZF1DX1ct2TQrAvRf?si=2d1551b1e08148a1',
        'https://open.spotify.com/playlist/43FJRpUKaBOSWJsbZzOiNo?si=d0b0449b2c814392',
    ]
    // pull all spotify links from the database and segregate the ones uploaded by the current logged in user into a state varible array
    // so that it likes like the array above

    const size = {
        width: '100%',
        height: 80,
    };

    const size2 = {
        width: '100%',
        height: 400,
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
        setNewAppleMusicLink(event.target.value.slice(0,8)+'embed.'+event.target.value.slice(8))
        if (event.target.value != 0) {
            setAppleMusicButton(false)
        }
        if (event.target.value == 0) {
            setAppleMusicButton(true)
        }
    }

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
                        Welcome, user.name
                    </Text>
                    <Text css={{
                        '@xsMax': {
                            fontSize: '$md',
                        },
                        '@xsMin': {
                            fontSize: '$lg',
                        }
                    }}>
                        Here you can edit your published posts or continue your saved drafts.
                    </Text>
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

                                {/* map over the posts and for every post display the grid below like i've shown for reference */}
                                <Grid css={{
                                    margin: '24px 8px',
                                }}>
                                    <Card css={{
                                        '@smMin': {
                                            w: "370px",
                                            h: "300px"
                                        },
                                        '@smMax': {
                                            w: "250px",
                                            h: "175px"
                                        },
                                    }} isPressable
                                        onPress={() => {
                                            // navigate to the post live (published) page
                                        }}>
                                        {/* if post is published then keep card pressable^ and take it to the post link on click */}
                                        <Card.Body css={{ p: 0 }}>
                                            <Card.Image
                                                src={AB171}
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
                                                bgBlur: "#00000066",
                                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                                bottom: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <Row>
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
                                                        post.title post.title post.title post.title post.title post.title
                                                    </Text>
                                                </Col>
                                                <Col>
                                                    <Row justify="flex-end">
                                                        <Button flat auto color="primary"
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
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Grid>

                                <Grid css={{
                                    margin: '24px 8px',
                                }}>
                                    <Card css={{
                                        '@smMin': {
                                            w: "370px",
                                            h: "300px"
                                        },
                                        '@smMax': {
                                            w: "250px",
                                            h: "175px"
                                        },
                                    }} isPressable
                                        onPress={() => {
                                            // navigate to the post live (published) page
                                        }}>
                                        {/* if post is published then keep card pressable^ and take it to the post link on click */}
                                        <Card.Body css={{ p: 0 }}>
                                            <Card.Image
                                                src={Divine}
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
                                                bgBlur: "#00000066",
                                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                                bottom: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <Row>
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
                                                        post.title post.title post.title post.title post.title post.title
                                                    </Text>
                                                </Col>
                                                <Col>
                                                    <Row justify="flex-end">
                                                        <Button flat auto color="primary"
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
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Grid>

                                <Grid css={{
                                    margin: '24px 8px',
                                }}>
                                    <Card css={{
                                        '@smMin': {
                                            w: "370px",
                                            h: "300px"
                                        },
                                        '@smMax': {
                                            w: "250px",
                                            h: "175px"
                                        },
                                    }} isPressable
                                        onPress={() => {
                                            // navigate to the post live (published) page
                                        }}>
                                        {/* if post is published then keep card pressable^ and take it to the post link on click */}
                                        <Card.Body css={{ p: 0 }}>
                                            <Card.Image
                                                src={Divine}
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
                                                bgBlur: "#00000066",
                                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                                bottom: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <Row>
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
                                                        post.title post.title post.title post.title post.title post.title
                                                    </Text>
                                                </Col>
                                                <Col>
                                                    <Row justify="flex-end">
                                                        <Button flat auto color="primary"
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
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Grid>

                                <Grid css={{
                                    margin: '24px 8px',
                                }}>
                                    <Card css={{
                                        '@smMin': {
                                            w: "370px",
                                            h: "300px"
                                        },
                                        '@smMax': {
                                            w: "250px",
                                            h: "175px"
                                        },
                                    }} isPressable
                                        onPress={() => {
                                            // navigate to the post live (published) page
                                        }}>
                                        {/* if post is published then keep card pressable^ and take it to the post link on click */}
                                        <Card.Body css={{ p: 0 }}>
                                            <Card.Image
                                                src={AB171}
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
                                                bgBlur: "#00000066",
                                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                                bottom: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <Row>
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
                                                        post.title post.title post.title post.title post.title post.title
                                                    </Text>
                                                </Col>
                                                <Col>
                                                    <Row justify="flex-end">
                                                        <Button flat auto color="primary"
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
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Grid>

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

                                {/* map over the posts and for every post display the grid below like i've shown for reference */}
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
                                                src={AB171}
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
                                                bgBlur: "#00000066",
                                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                                bottom: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <Row>
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
                                                        post.title post.title post.title post.title post.title post.title
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
                                                src={Divine}
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
                                                bgBlur: "#00000066",
                                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                                bottom: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <Row>
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
                                                        post.title post.title post.title post.title post.title post.title
                                                    </Text>
                                                </Col>
                                                <Col>
                                                    <Row justify="flex-end">
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
                                Spotify Playlists
                            </Text>

                            <Grid.Container css={{
                                jc: 'center'
                            }}>
                                {userSPPlaylistsLinks.map((playlist, index) => (
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
                                                uri={playlist}
                                                size={size}
                                                view="list"
                                                theme="black"
                                            />
                                            <Button flat auto color="error"
                                                css={{
                                                    m: '12px'
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
                            </Grid.Container>

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
                                            <Text
                                                css={{ color: "inherit" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                Add Spotify Link
                                            </Text>
                                        </Button>

                                        <Button flat auto
                                            css={{
                                                m: '24px',
                                                color: "#c2cad7",
                                                bg: "#fc3c44"
                                            }}
                                            onPress={() => {
                                                setShowAppleMusicInput(true)
                                                setShowSpotifyInput(false)
                                                setNewSpotifyLink('')
                                                setNewAppleMusicLink('')
                                            }}>
                                            <Text
                                                css={{ color: "inherit" }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                Add Apple Music
                                            </Text>
                                        </Button>
                                    </Row>


                                    {showSpotifyInput &&
                                        <>
                                            <Input labelPlaceholder="New Spotify Playlist Link"
                                                css={{
                                                    m: '24px'
                                                }}
                                                onChange={handleSpotifyChange} />
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
                                                        size={size2}
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
                                                onChange={handleAppleMusicChange} />
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
                                                        height="400"
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
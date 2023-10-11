import { Grid, Image, Text, Container, Col, Card, Row, Button, Input, Loading } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import './homePage.css'
import { BsArrowRight } from 'react-icons/bs';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {

    const [fetching, setFetching] = useState(true);
    const [gridPosts, setGridPosts] = useState();
    const [dateLatest, setDateLatest] = useState(true);
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();
    const [postsFound, setPostsFound] = useState(false)

    const gridFilledD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://soundcheck-backend.onrender.com/api/posts');
            const allPosts = response.data;

            // Filter and sort the posts
            const filteredPosts = allPosts
                .filter(post => post.gridNumber >= 1 && post.gridNumber <= 13)
                .sort((a, b) => a.gridNumber - b.gridNumber);

            setPosts(filteredPosts);
            setFetching(false);
        } catch (error) {
            setFetching(false);
        }
    };


    useEffect(() => {
        setFetching(true);
        fetchPosts();
    }, []);

    return (
        <div className="home">
            {fetching &&
                <Grid.Container css={{
                    w: '100vw',
                    jc: 'center',
                    h: '100vh',
                    alignItems: 'center'
                }}>
                    <Loading size="xl" color={'white'} />
                </Grid.Container>
            }

            <div className="desktop">

                {
                    posts &&
                    <Grid.Container
                        direction="column"
                        css={{
                            height: "100vh",
                            width: "95%",
                            jc: 'center',
                            marginBottom: '120px'
                        }}
                    >
                        {/* First Row - small, big, small */}

                        <Grid.Container
                            css={{ height: "50vh", width: "100%", position: "relative" }}
                            direction="row"
                        >

                            <Grid.Container
                                direction="column"
                                css={{
                                    height: "50vh",
                                    width: "25%",
                                    flexDirection: 'column'
                                }}
                            >

                                {posts.map(post => {
                                    if (post.gridNumber == 2) {
                                        if (gridFilledD[post.gridNumber - 1] == 0) {
                                            gridFilledD[post.gridNumber - 1] = 1
                                            return (
                                                <Grid className="left-container"
                                                    css={{ height: "25vh", width: "100%", }}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}>
                                                    <Image
                                                        css={{ height: "25vh", width: "100%", }}
                                                        src={post.homeImg}
                                                        objectFit="fill"
                                                        className="image"
                                                        onClick={() => {
                                                            navigate(`/posts/${post._id}`);
                                                        }}
                                                    />
                                                    <div className="card">
                                                        <Col css={{
                                                            backgroundColor: '$gray400',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text
                                                                css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$md',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$md'
                                                                    },
                                                                    padding: '1.5% 2.5% 1% 2.5%',
                                                                    fontWeight: '$semibold',
                                                                    backgroundColor: '$gray400',
                                                                    fontFamily:"Roboto"
                                                                }}>
                                                                {post.title}
                                                            </Text>
                                                            <Row css={{
                                                                w: 'max-content',
                                                                padding: '1% 0% 1.5% 0%',
                                                                alignItems: 'center'
                                                            }} onClick={() => {
                                                                navigate(`/posts/${post._id}`);
                                                            }}>
                                                                <Text css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$xs',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$sm'
                                                                    },
                                                                    color: 'white',
                                                                    paddingRight: '4px',
                                                                    '&:hover': {
                                                                        textDecoration: 'underline'
                                                                    },
                                                                    fontWeight: '$medium',
                                                                    fontFamily:"Roboto"
                                                                }}
                                                                >
                                                                    READ MORE
                                                                </Text>
                                                                <BsArrowRight
                                                                    size={'16px'}
                                                                    color="white" />
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                    }
                                })}

                                {posts.map(post => {
                                    if (post.gridNumber == 4) {
                                        if (gridFilledD[post.gridNumber - 1] == 0) {
                                            gridFilledD[post.gridNumber - 1] = 1
                                            return (
                                                <Grid className="left-container"
                                                    css={{ height: "25vh", width: "100%", }}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}>
                                                    <Image
                                                        css={{ height: "25vh", width: "100%", }}
                                                        src={post.homeImg}
                                                        objectFit="fill"
                                                        className="image"
                                                        onClick={() => {
                                                            navigate(`/posts/${post._id}`);
                                                        }}
                                                    />
                                                    <div className="card">
                                                        <Col css={{
                                                            backgroundColor: '$gray400',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text
                                                                css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$md',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$md'
                                                                    },
                                                                    padding: '1.5% 2.5% 1% 2.5%',
                                                                    fontWeight: '$semibold',
                                                                    backgroundColor: '$gray400',
                                                                    fontFamily:"Roboto"
                                                                }}>
                                                                {post.title}
                                                            </Text>
                                                            <Row css={{
                                                                w: 'max-content',
                                                                padding: '1% 0% 1.5% 0%',
                                                                alignItems: 'center'
                                                            }} onClick={() => {
                                                                navigate(`/posts/${post._id}`);
                                                            }}>
                                                                <Text css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$xs',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$sm'
                                                                    },
                                                                    color: 'white',
                                                                    paddingRight: '4px',
                                                                    '&:hover': {
                                                                        textDecoration: 'underline'
                                                                    },
                                                                    fontWeight: '$medium',
                                                                    fontFamily:"Roboto"
                                                                }}
                                                                >
                                                                    READ MORE
                                                                </Text>
                                                                <BsArrowRight
                                                                    size={'16px'}
                                                                    color="white" />
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                    }
                                })}

                            </Grid.Container>

                            <Grid.Container
                                direction="column"
                                css={{
                                    height: "50vh",
                                    width: "50%",
                                    flexDirection: 'column',

                                }}
                            >
                                {posts.map(post => {
                                    if (post.gridNumber == 1) {
                                        if (gridFilledD[post.gridNumber - 1] == 0) {
                                            gridFilledD[post.gridNumber - 1] = 1

                                            return (
                                                <Grid className="container"
                                                    css={{ height: "50vh", width: "100%", }}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}>
                                                    <Image
                                                        css={{ height: "50vh", width: "100%", }}
                                                        src={post.homeImg}
                                                        objectFit="fill"
                                                        className="image"
                                                        onClick={() => {
                                                            navigate(`/posts/${post._id}`);
                                                        }}
                                                    />
                                                    <div className="card">
                                                        <Col css={{
                                                            backgroundColor: '$gray400',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text
                                                                css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$md',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$md'
                                                                    },
                                                                    padding: '1.5% 2.5% 1% 2.5%',
                                                                    fontWeight: '$semibold',
                                                                    backgroundColor: '$gray400',
                                                                    fontFamily:"Roboto"
                                                                }}>
                                                                {post.title}
                                                            </Text>
                                                            <Row css={{
                                                                w: 'max-content',
                                                                padding: '1% 0% 1.5% 0%',
                                                                alignItems: 'center'
                                                            }} onClick={() => {
                                                                navigate(`/posts/${post._id}`);
                                                            }}>
                                                                <Text css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$xs',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$sm'
                                                                    },
                                                                    color: 'white',
                                                                    paddingRight: '4px',
                                                                    '&:hover': {
                                                                        textDecoration: 'underline'
                                                                    },
                                                                    fontWeight: '$medium',
                                                                    fontFamily:"Roboto"
                                                                }}
                                                                >
                                                                    READ MORE
                                                                </Text>
                                                                <BsArrowRight
                                                                    size={'16px'}
                                                                    color="white" />
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                    }
                                })}

                            </Grid.Container>

                            <Grid.Container
                                direction="column"
                                css={{
                                    height: "50vh",
                                    width: "25%",
                                    flexDirection: 'column'
                                }}
                            >
                                {posts.map(post => {
                                    if (post.gridNumber == 3) {
                                        if (gridFilledD[post.gridNumber - 1] == 0) {
                                            gridFilledD[post.gridNumber - 1] = 1
                                            return (
                                                <Grid className="right-container"
                                                    css={{ height: "25vh", width: "100%", }}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}>
                                                    <Image
                                                        css={{ height: "25vh", width: "100%", }}
                                                        src={post.homeImg}
                                                        objectFit="fill"
                                                        className="image"
                                                        onClick={() => {
                                                            navigate(`/posts/${post._id}`);
                                                        }}
                                                    />
                                                    <div className="card">
                                                        <Col css={{
                                                            backgroundColor: '$gray400',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Text
                                                                css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$md',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$md'
                                                                    },
                                                                    padding: '1.5% 2.5% 1% 2.5%',
                                                                    fontWeight: '$semibold',
                                                                    backgroundColor: '$gray400',
                                                                    fontFamily:"Roboto",
                                                                }}>
                                                                {post.title}
                                                            </Text>
                                                            <Row css={{
                                                                w: 'max-content',
                                                                padding: '1% 0% 1.5% 0%',
                                                                alignItems: 'center'
                                                            }} onClick={() => {
                                                                navigate(`/posts/${post._id}`);
                                                            }}>
                                                                <Text css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$xs',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$sm'
                                                                    },
                                                                    color: 'white',
                                                                    paddingRight: '4px',
                                                                    '&:hover': {
                                                                        textDecoration: 'underline'
                                                                    },
                                                                    fontWeight: '$medium',
                                                                    fontFamily:"Roboto"
                                                                }}
                                                                >
                                                                    READ MORE
                                                                </Text>
                                                                <BsArrowRight
                                                                    size={'16px'}
                                                                    color="white" />
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                    }
                                })}

                                {posts.map(post => {
                                    if (post.gridNumber == 5) {
                                        if (gridFilledD[post.gridNumber - 1] == 0) {
                                            gridFilledD[post.gridNumber - 1] = 1
                                            return (
                                                <Grid className="right-container"
                                                    css={{ height: "25vh", width: "100%", }}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}>
                                                    <Image
                                                        css={{ height: "25vh", width: "100%", }}
                                                        src={post.homeImg}
                                                        objectFit="fill"
                                                        className="image"
                                                        onClick={() => {
                                                            navigate(`/posts/${post._id}`);
                                                        }}
                                                    />
                                                    <div className="card">
                                                        <Col css={{
                                                            backgroundColor: '$gray400',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text
                                                                css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$md',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$md'
                                                                    },
                                                                    padding: '1.5% 2.5% 1% 2.5%',
                                                                    fontWeight: '$semibold',
                                                                    backgroundColor: '$gray400',
                                                                    fontFamily:"Roboto"
                                                                }}>
                                                                {post.title}
                                                            </Text>
                                                            <Row css={{
                                                                w: 'max-content',
                                                                padding: '1% 0% 1.5% 0%',
                                                                alignItems: 'center'
                                                            }} onClick={() => {
                                                                navigate(`/posts/${post._id}`);
                                                            }}>
                                                                <Text css={{
                                                                    '@xsMax': {
                                                                        fontSize: '$xs',
                                                                    },
                                                                    '@xsMin': {
                                                                        fontSize: '$sm'
                                                                    },
                                                                    color: 'white',
                                                                    paddingRight: '4px',
                                                                    '&:hover': {
                                                                        textDecoration: 'underline'
                                                                    },
                                                                    fontWeight: '$medium',
                                                                    fontFamily:"Roboto"
                                                                }}
                                                                >
                                                                    READ MORE
                                                                </Text>
                                                                <BsArrowRight
                                                                    size={'16px'}
                                                                    color="white" />
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                    }
                                })}

                            </Grid.Container>
                        </Grid.Container>

                        {/* Second Row - equally */}

                        <Grid.Container
                            css={{ height: "50vh", width: "100%", position: "relative", }}
                            direction="row"
                        >
                            {posts.map((post) => {
                                if (post.gridNumber == 6 || post.gridNumber == 10) {
                                    if (gridFilledD[post.gridNumber - 1] == 0) {
                                        gridFilledD[post.gridNumber - 1] = 1
                                        return (
                                            <Grid className="left-container"
                                                css={{ height: "25vh", width: "25%", }}
                                                onClick={() => {
                                                    navigate(`/posts/${post._id}`);
                                                }}>
                                                <Image
                                                    css={{ height: "25vh", width: "100%", }}
                                                    src={post.homeImg}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}
                                                    objectFit="fill"
                                                    className="image"
                                                />
                                                <div className="card">
                                                    <Col css={{
                                                        backgroundColor: '$gray400',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text
                                                            css={{
                                                                '@xsMax': {
                                                                    fontSize: '$md',
                                                                },
                                                                '@xsMin': {
                                                                    fontSize: '$md'
                                                                },
                                                                padding: '1.5% 2.5% 1% 2.5%',
                                                                fontWeight: '$semibold',
                                                                backgroundColor: '$gray400',
                                                                fontFamily:"Roboto"
                                                            }}>
                                                            {post.title}
                                                        </Text>
                                                        <Row css={{
                                                            w: 'max-content',
                                                            padding: '1% 0% 1.5% 0%',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text css={{
                                                                '@xsMax': {
                                                                    fontSize: '$xs',
                                                                },
                                                                '@xsMin': {
                                                                    fontSize: '$sm'
                                                                },
                                                                color: 'white',
                                                                paddingRight: '4px',
                                                                '&:hover': {
                                                                    textDecoration: 'underline'
                                                                },
                                                                fontWeight: '$medium',
                                                                fontFamily:"Roboto"
                                                            }}>
                                                                READ MORE
                                                            </Text>
                                                            <BsArrowRight
                                                                size={'16px'}
                                                                color="white" />
                                                        </Row>
                                                    </Col>
                                                </div>
                                            </Grid>
                                        )
                                    }
                                }
                                else if (post.gridNumber == 7 || post.gridNumber == 8 || post.gridNumber == 11 || post.gridNumber == 12) {
                                    if (gridFilledD[post.gridNumber - 1] == 0) {
                                        gridFilledD[post.gridNumber - 1] = 1
                                        return (
                                            <Grid className="container"
                                                css={{ height: "25vh", width: "25%", }}
                                                onClick={() => {
                                                    navigate(`/posts/${post._id}`);
                                                }}>
                                                <Image
                                                    css={{ height: "25vh", width: "100%", }}
                                                    src={post.homeImg}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}
                                                    objectFit="fill"
                                                    className="image"
                                                />
                                                <div className="card">
                                                    <Col css={{
                                                        backgroundColor: '$gray400',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text
                                                            css={{
                                                                '@xsMax': {
                                                                    fontSize: '$md',
                                                                },
                                                                '@xsMin': {
                                                                    fontSize: '$md'
                                                                },
                                                                padding: '1.5% 2.5% 1% 2.5%',
                                                                fontWeight: '$semibold',
                                                                backgroundColor: '$gray400',
                                                                fontFamily:"Roboto",
                                                            }}>
                                                            {post.title}
                                                        </Text>
                                                        <Row css={{
                                                            w: 'max-content',
                                                            padding: '1% 0% 1.5% 0%',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text css={{
                                                                '@xsMax': {
                                                                    fontSize: '$xs',
                                                                },
                                                                '@xsMin': {
                                                                    fontSize: '$sm'
                                                                },
                                                                color: 'white',
                                                                paddingRight: '4px',
                                                                '&:hover': {
                                                                    textDecoration: 'underline'
                                                                },
                                                                fontWeight: '$medium',
                                                                fontFamily:"Roboto"
                                                            }}>
                                                                READ MORE
                                                            </Text>
                                                            <BsArrowRight
                                                                size={'16px'}
                                                                color="white" />
                                                        </Row>
                                                    </Col>
                                                </div>
                                            </Grid>
                                        )
                                    }
                                }
                                else if (post.gridNumber == 9 || post.gridNumber == 13) {
                                    if (gridFilledD[post.gridNumber - 1] == 0) {
                                        gridFilledD[post.gridNumber - 1] = 1
                                        return (
                                            <Grid className="right-container"
                                                css={{ height: "25vh", width: "25%", }}
                                                onClick={() => {
                                                    navigate(`/posts/${post._id}`);
                                                }}>
                                                <Image
                                                    css={{ height: "25vh", width: "100%", }}
                                                    src={post.homeImg}
                                                    onClick={() => {
                                                        navigate(`/posts/${post._id}`);
                                                    }}
                                                    objectFit="fill"
                                                    className="image"
                                                />
                                                <div className="card">
                                                    <Col css={{
                                                        backgroundColor: '$gray400',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        fontFamily:"Roboto"
                                                    }}>
                                                        <Text
                                                            css={{
                                                                '@xsMax': {
                                                                    fontSize: '$md',
                                                                },
                                                                '@xsMin': {
                                                                    fontSize: '$md'
                                                                },
                                                                padding: '1.5% 2.5% 1% 2.5%',
                                                                fontWeight: '$semibold',
                                                                backgroundColor: '$gray400',
                                                                fontFamily:"Roboto"
                                                            }}>
                                                            {post.title}
                                                        </Text>
                                                        <Row css={{
                                                            w: 'max-content',
                                                            padding: '1% 0% 1.5% 0%',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text css={{
                                                                '@xsMax': {
                                                                    fontSize: '$xs',
                                                                },
                                                                '@xsMin': {
                                                                    fontSize: '$sm'
                                                                },
                                                                color: 'white',
                                                                paddingRight: '4px',
                                                                '&:hover': {
                                                                    textDecoration: 'underline'
                                                                },
                                                                fontWeight: '$medium',
                                                                fontFamily:"Roboto"
                                                            }}>
                                                                READ MORE
                                                            </Text>
                                                            <BsArrowRight
                                                                size={'16px'}
                                                                color="white" />
                                                        </Row>
                                                    </Col>
                                                </div>
                                            </Grid>
                                        )
                                    }
                                }
                            })}
                        </Grid.Container>

                    </Grid.Container>
                }

            </div>
            <div className="mobile">

                {posts &&
                    <Grid.Container
                        css={{
                            height: "270vh",
                            width: "95%",
                            jc: 'center',
                        }}
                    >

                        <Grid.Container
                            css={{
                                height: "240vh",
                                width: "100%",
                                jc: 'center',
                                position: "relative",
                            }}
                        >

                            {posts.map(post => {
                                    return (
                                        <Grid.Container
                                            direction="column"
                                            css={{
                                                height: "20vh",
                                                width: "100%",
                                                padding: '0 5%',
                                                flexWrap: 'nowrap'
                                            }}
                                        >
                                            <Card isPressable
                                                css={{ height: "30vh", width: "100%", borderRadius: '0' }}
                                                onPress={() => {
                                                    navigate(`/posts/${post._id}`);
                                                }}>
                                                <Card.Image
                                                    width='100%'
                                                    height='100%'
                                                    src={post.homeImg}
                                                    objectFit="fill"
                                                />
                                                <Card.Footer isBlurred
                                                    css={{
                                                        position: "absolute",
                                                        bgBlur: "#00000044",
                                                        bottom: 0,
                                                        zIndex: 1,
                                                        borderRadius: '0',
                                                        textAlign: 'center',
                                                        jc: 'center'
                                                    }}>
                                                    <Text css={{
                                                        fontSize:'$sm',
                                                        fontFamily:"Roboto"
                                                    }}>
                                                        {post.title}
                                                    </Text>

                                                </Card.Footer>
                                            </Card>
                                        </Grid.Container>
                                    )
                                
                            })}

                        </Grid.Container>

                    </Grid.Container>
                }
            </div>
        </div>
    );
}

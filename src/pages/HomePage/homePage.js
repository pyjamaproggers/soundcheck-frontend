import { Grid, Image, Text, Container, Col, Card, Row, Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import './homePage.css'
import Divine from '../../assets/Divine.jpeg'
import AB171 from '../../assets/AB171.jpeg'
import AB172 from '../../assets/AB172.jpeg'
import Temp1 from '../../assets/Temp1.jpg'
import Temp2 from '../../assets/Temp2.jpg'
import Temp3 from '../../assets/Temp3.png'
import Temp4 from '../../assets/Temp4.png'
import Temp5 from '../../assets/Temp5.png'
import Temp6 from '../../assets/Temp6.png'
import Temp7 from '../../assets/Temp7.png'
import Temp8 from '../../assets/Temp8.png'
import Temp9 from '../../assets/Temp9.png'
import Temp10 from '../../assets/Temp10.png'
import Temp11 from '../../assets/Temp11.png'
import { BsArrowRight } from 'react-icons/bs';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {

    const [fetching, setFetching] = useState(true);
    const [publishedPosts, setPublishedPosts] = useState();
    const [dateLatest, setDateLatest] = useState(true);
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();
    const [postsFound, setPostsFound] = useState(false)
  

    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://soundcheck-backend.onrender.com/api/posts');
        console.log(response.data);
        setPosts(response.data);
        setFetching(false);
      } catch (error) {
        console.log(error);
        setFetching(false);
      }
    };
  
    useEffect(() => {
      setFetching(true);
      fetchPosts();
    }, []);
  
    // useEffect(() => {
    //   segregatePosts();
    // }, [posts]);

    return (
        <div className="home">

            <div className="desktop">
                {
                    posts &&
                    <Grid.Container
                    direction="column"
                    css={{
                        height: "100vh",
                        width: "95%",
                        jc: 'center'
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
                            <Grid className="left-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%", }}
                                    src={posts[1].homeImg}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            {posts[1].title}
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
                                                fontWeight: '$medium'
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

                            <Grid className="left-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%" }}
                                    src={posts[3].homeImg}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            {posts[3].title}
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
                                                fontWeight: '$medium'
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

                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "50vh",
                                width: "50%",
                                flexDirection: 'column',

                            }}
                        >
                            <Grid className="container"
                                css={{ height: "50vh", width: "100%", }}>
                                <Image
                                    css={{
                                        height: "50vh",
                                        width: "100%",
                                    }}
                                    src={posts[0].homeImg}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            {posts[0].title}
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
                                                fontWeight: '$medium'
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
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "50vh",
                                width: "25%",
                                flexDirection: 'column'
                            }}
                        >
                            <Grid className="right-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%", }}
                                    src={posts[2].homeImg}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            {posts[2].title}
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
                                                fontWeight: '$medium'
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
                            <Grid className="right-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%" }}
                                    src={posts[4].homeImg}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            {posts[4].title}
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
                                                fontWeight: '$medium'
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

                        </Grid.Container>
                    </Grid.Container>
                    
                    {/* Second Row - equally */}
                    <Grid.Container
                        css={{ height: "50vh", width: "100%", position: "relative", }}
                        direction="row"
                    >
                        <Grid className="left-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={posts[5].homeImg}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        {posts[5].title}
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={posts[6].homeImg}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        {posts[6].title}
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={posts[7].homeImg}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        {posts[7].title}
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
                                            fontWeight: '$medium'
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

                        <Grid className="right-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={posts[8].homeImg}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        {posts[8].title}
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
                                            fontWeight: '$medium'
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

                        <Grid className="left-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp9}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp10}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp11}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="right-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={AB171}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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
                    </Grid.Container>

                </Grid.Container>
                }
                

            </div>
            <div className="mobile">
                { posts &&
                <Grid.Container
                    css={{
                        height: "270vh",
                        width: "95%",
                        jc: 'center',
                    }}
                >
                    <Grid.Container
                        css={{
                            height: "30vh",
                            width: "95%",
                            jc: 'center',
                            position: "relative"
                        }}
                    >
                        <Grid.Container
                            direction="column"
                            css={{
                                height: "30vh",
                                width: "100%",
                            }}
                        >
                            <Card
                                css={{ height: "30vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={<Grid.Container
                    direction="column"
                    css={{
                        height: "100vh",
                        width: "95%",
                        jc: 'center'
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
                            <Grid className="left-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%", }}
                                    src={posts[1].homeImg}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            {posts[1].title}
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
                                                fontWeight: '$medium'
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

                            <Grid className="left-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%" }}
                                    src={Temp2}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                                fontWeight: '$medium'
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

                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "50vh",
                                width: "50%",
                                flexDirection: 'column',

                            }}
                        >
                            <Grid className="container"
                                css={{ height: "50vh", width: "100%", }}>
                                <Image
                                    css={{
                                        height: "50vh",
                                        width: "100%",
                                    }}
                                    src={Divine}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                                fontWeight: '$medium'
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
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "50vh",
                                width: "25%",
                                flexDirection: 'column'
                            }}
                        >
                            <Grid className="right-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%", }}
                                    src={Temp3}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                                fontWeight: '$medium'
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
                            <Grid className="right-container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%" }}
                                    src={Temp4}
                                    objectFit="cover"
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
                                                    fontSize: '$xs',
                                                },
                                                '@xsMin': {
                                                    fontSize: '$xs'
                                                },
                                                padding: '1.5% 2.5% 1% 2.5%',
                                                fontWeight: '$semibold',
                                                backgroundColor: '$gray400',
                                            }}>
                                            AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                                fontWeight: '$medium'
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

                        </Grid.Container>
                    </Grid.Container>
                    
                    {/* Second Row - equally */}
                    <Grid.Container
                        css={{ height: "50vh", width: "100%", position: "relative", }}
                        direction="row"
                    >
                        <Grid className="left-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp5}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp6}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp7}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="right-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp8}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="left-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp9}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp10}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp11}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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

                        <Grid className="right-container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={AB171}
                                objectFit="cover"
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
                                                fontSize: '$xs',
                                            },
                                            '@xsMin': {
                                                fontSize: '$xs'
                                            },
                                            padding: '1.5% 2.5% 1% 2.5%',
                                            fontWeight: '$semibold',
                                            backgroundColor: '$gray400',
                                        }}>
                                        AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES TESTING
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
                                            fontWeight: '$medium'
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
                    </Grid.Container>

                </Grid.Container>}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                    </Grid.Container>

                    <Grid.Container
                        css={{
                            height: "240vh",
                            width: "95%",
                            jc: 'center',
                            position: "relative",
                        }}
                    >
                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB172}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB172}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB172}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB171}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB171}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB172}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB172}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB171}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB171}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB172}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB172}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>

                        <Grid.Container
                            direction="column"
                            css={{
                                height: "20vh",
                                width: "100%",
                                padding: '0 5%',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Card
                                css={{ height: "20vh", width: "100%", borderRadius: '0' }}>
                                <Card.Image
                                    width='100%'
                                    height='100%'
                                    src={AB171}
                                    objectFit="cover"
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
                                        fontSize: '$sm'
                                    }}>
                                        Dummer Article Title
                                    </Text>

                                </Card.Footer>
                            </Card>
                        </Grid.Container>
                    </Grid.Container>

                </Grid.Container>
                }
            </div>
        </div>
    );
}

import { Grid, Image, Text, Container, Col, Card, Row, Button, Input } from "@nextui-org/react";
import React from "react";
import './homePage.css'
import Divine from '../../assets/Divine.jpeg'
import AB171 from '../../assets/AB171.jpeg'
import AB172 from '../../assets/AB172.jpeg'

export default function HomeScreen() {
    return (
        <div className="home">
            <Grid.Container
                css={{
                    justifyContent: 'center',
                }}>
                <Col>

                    <Text
                        css={{
                            '@smMin': {
                                fontSize: '$5xl',
                                padding: '16px 16px 4px 16px'
                            },
                            '@smMax': {
                                fontSize: '$3xl',
                                padding: '16px 16px 4px 16px'
                            },
                            fontWeight: '$semibold',
                            // textGradient: "45deg, #A8142A 80%, #300313 100%",
                            textAlign: 'center',
                            // color: '#CE203C'
                        }}>
                        SoundCheck™ India
                    </Text>

                    <Text
                        css={{
                            '@smMin': {
                                fontSize: '$xl',
                            },
                            '@smMax': {
                                fontSize: '$md',
                            },
                            fontWeight: '$medium',
                            textAlign: 'center',
                            padding: '0px 10% 12px 10%'
                        }}>
                        Find the latest news and updates on Desi Rap/Hip-Hop here! From the latest happenings in the desi rap world to curated playlists just for you, we've got it all.
                    </Text>

                </Col>
            </Grid.Container>

            <div className="desktop">
                <Grid.Container
                    direction="column"
                    css={{
                        width: "100vw",
                    }}
                >


                    <Grid.Container css={{
                        justifyContent: 'space-bewteen',
                    }}
                        direction="row">
                        <Container css={{
                            flexDirection: 'column',
                            width: 'max-content'
                        }}>
                            <Grid css={{
                                width: '20vw',
                            }} className="container">
                                <Image css={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px'
                                }}
                                    objectFit="contain"
                                    src={AB171}
                                    className="image" />
                                <Text className="overlay">
                                    Dummer Article Title
                                </Text>
                            </Grid>

                            <Grid css={{
                                width: '20vw'
                            }} className="container">
                                <Image css={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px'
                                }}
                                    objectFit="contain"
                                    src={AB172}
                                    className="image" />
                                <Text className="overlay">
                                    Dummer Article Title
                                </Text>
                            </Grid>

                        </Container>

                        <Container css={{
                            flexDirection: 'column',
                            width: 'max-content'
                        }}>
                            <Grid css={{
                                width: '40vw',
                            }} className="container">
                                <Image css={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px'
                                }}
                                    objectFit="contain"
                                    src={Divine}
                                    className="image" />
                                <Text className="overlay">
                                    Dummer Article Title
                                </Text>
                            </Grid>
                        </Container>

                        <Container css={{
                            flexDirection: 'column',
                            width: 'max-content'
                        }}>
                            <Grid css={{
                                width: '20vw'
                            }} className="container">
                                <Image css={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px'
                                }}
                                    objectFit="contain"
                                    src={AB172}
                                    className="image" />
                                <Text className="overlay">
                                    Dummer Article Title
                                </Text>
                            </Grid>
                            <Grid css={{
                                width: '20vw'
                            }} className="container">
                                <Image css={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px'
                                }}
                                    objectFit="contain"
                                    src={AB171}
                                    className="image" />
                                <Text className="overlay">
                                    Dummer Article Title
                                </Text>
                            </Grid>
                        </Container>






                    </Grid.Container>

                    <Grid.Container css={{
                        justifyContent: 'center',
                    }}
                    >

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">

                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB171}
                                className="image" />

                            <Text className="overlay">
                                Dummer Article Title
                            </Text>

                        </Grid>

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">
                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB171}
                                className="image" />
                            <Text className="overlay">
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">
                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB172}
                                className="image" />
                            <Text className="overlay">
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">
                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB172}
                                className="image" />
                            <Text className="overlay">
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">
                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB172}
                                className="image" />
                            <Text className="overlay">
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">
                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB171}
                                className="image" />
                            <Text className="overlay">
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">
                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB171}
                                className="image" />
                            <Text className="overlay">
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid css={{
                            width: '20vw',
                            margin: '0px 12px'
                        }} className="container">
                            <Image css={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px'
                            }}
                                objectFit="contain"
                                src={AB171}
                                className="image" />
                            <Text className="overlay">
                                Dummer Article Title
                            </Text>
                        </Grid>

                    </Grid.Container>

                </Grid.Container>

            </div>
            <div className="mobile">
                <Grid.Container css={{
                    width: '100vw',
                    justifyContent: 'center'
                }}>
                    <Grid css={{
                        justifySelf: 'center',
                        margin: '16px'
                    }}>
                        <Card css={{ w: "275px", h: "200px", justifySelf: 'center' }} isPressable>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Article
                                </Text>
                            </Card.Header>
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
                                    bgBlur: "#ffffff20",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0)",
                                    bottom: 0,
                                    zIndex: 1,
                                    textAlign: 'center'
                                }}
                            >
                                <Text color="#fff" css={{ fontWeight: '$semibold', fontSize: '$sm', textAlign: 'center' }}>
                                    Dummy Article Title
                                </Text>
                            </Card.Footer>
                        </Card>
                    </Grid>

                    <Grid css={{
                        justifySelf: 'center',
                        margin: '16px'
                    }}>
                        <Card css={{ w: "275px", h: "200px", justifySelf: 'center' }} isPressable>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Article
                                </Text>
                            </Card.Header>
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
                                    bgBlur: "#ffffff20",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0)",
                                    bottom: 0,
                                    zIndex: 1,
                                    textAlign: 'center'
                                }}
                            >
                                <Text color="#fff" css={{ fontWeight: '$semibold', fontSize: '$sm', textAlign: 'center' }}>
                                    Dummy Article Title
                                </Text>
                            </Card.Footer>
                        </Card>
                    </Grid>

                    <Grid css={{
                        justifySelf: 'center',
                        margin: '16px'
                    }}>
                        <Card css={{ w: "275px", h: "200px", justifySelf: 'center' }} isPressable>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Article
                                </Text>
                            </Card.Header>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={AB172}
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
                                    bgBlur: "#ffffff20",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0)",
                                    bottom: 0,
                                    zIndex: 1,
                                    textAlign: 'center'
                                }}
                            >
                                <Text color="#fff" css={{ fontWeight: '$semibold', fontSize: '$sm', textAlign: 'center' }}>
                                    Dummy Article Title
                                </Text>
                            </Card.Footer>
                        </Card>
                    </Grid>

                    <Grid css={{
                        justifySelf: 'center',
                        margin: '16px'
                    }}>
                        <Card css={{ w: "275px", h: "200px", justifySelf: 'center' }} isPressable>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Article
                                </Text>
                            </Card.Header>
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
                                    bgBlur: "#ffffff20",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0)",
                                    bottom: 0,
                                    zIndex: 1,
                                    textAlign: 'center'
                                }}
                            >
                                <Text color="#fff" css={{ fontWeight: '$semibold', fontSize: '$sm', textAlign: 'center' }}>
                                    Dummy Article Title
                                </Text>
                            </Card.Footer>
                        </Card>
                    </Grid>

                    <Grid css={{
                        justifySelf: 'center',
                        margin: '16px'
                    }}>
                        <Card css={{ w: "275px", h: "200px", justifySelf: 'center' }} isPressable>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Article
                                </Text>
                            </Card.Header>
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
                                    bgBlur: "#ffffff20",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0)",
                                    bottom: 0,
                                    zIndex: 1,
                                    textAlign: 'center'
                                }}
                            >
                                <Text color="#fff" css={{ fontWeight: '$semibold', fontSize: '$sm', textAlign: 'center' }}>
                                    Dummy Article Title
                                </Text>
                            </Card.Footer>
                        </Card>
                    </Grid>

                    <Grid css={{
                        justifySelf: 'center',
                        margin: '16px'
                    }}>
                        <Card css={{ w: "275px", h: "200px", justifySelf: 'center' }} isPressable>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Article
                                </Text>
                            </Card.Header>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={AB172}
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
                                    bgBlur: "#ffffff20",
                                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0)",
                                    bottom: 0,
                                    zIndex: 1,
                                    textAlign: 'center'
                                }}
                            >
                                <Text color="#fff" css={{ fontWeight: '$semibold', fontSize: '$sm', textAlign: 'center' }}>
                                    Dummy Article Title
                                </Text>
                            </Card.Footer>
                        </Card>
                    </Grid>

                </Grid.Container>
            </div>

            <Grid.Container
                css={{
                    justifyContent: 'center',
                    margin: '24px 0px'
                }}>
                <Col
                    css={{
                        width: 'max-content',
                        textAlign: 'center'
                    }}>
                    <Text css={{
                        '@smMin': {
                            fontSize: '$3xl',
                            padding: '16px 16px 0px 16px'
                        },
                        '@smMax': {
                            fontSize: '$xl',
                            padding: '16px 16px 0px 16px'
                        },
                        fontWeight: '$semibold'
                    }}>
                        Subscribe
                    </Text>
                    <Text css={{
                        '@smMin': {
                            fontSize: '$xl',
                        },
                        '@smMax': {
                            fontSize: '$lg',
                        },
                        pb: '16px',
                        fontWeight: '$medium',
                        color: '$gray600'
                    }}>
                        To get email updates from SoundCheck™ India
                    </Text>
                    <div className="subscribe-desktop">
                        <Row css={{
                            width: '100%',
                            jc: 'center'
                        }}>
                            <Input placeholder="Your email address" />
                            <Button auto flat color='error' css={{
                                backgroundColor: '#300313',
                            }}>
                                <Text css={{
                                    fontWeight: 600,
                                }}>
                                    Subscribe
                                </Text>
                            </Button>
                        </Row>
                    </div>
                    <div className="subscribe-mobile">
                        <Input placeholder="Your email address" />
                        <Button auto flat color='error' css={{
                            backgroundColor: '#300313',
                        }}>
                            <Text css={{
                                fontWeight: 600,
                            }}>
                                Subscribe
                            </Text>
                        </Button>
                    </div>
                </Col>
            </Grid.Container>
        </div>
    );
}

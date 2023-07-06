import { Grid, Image, Text, Container, Col, Card, Row, Button, Input } from "@nextui-org/react";
import React from "react";
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

export default function HomeScreen() {
    return (
        <div className="home">

            <div className="desktop">
                <Grid.Container
                    direction="column"
                    css={{
                        height: "100vh",
                        width: "95%",
                        jc: 'center'
                    }}

                >
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
                            <Grid className="container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%", }}
                                    src={Temp1}
                                    objectFit="cover"
                                    className="image"
                                />
                                <Text className="overlay"
                                    css={{ fontSize: '$xs' }}>
                                    Dummer Article Title
                                </Text>
                            </Grid>
                            <Grid className="container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%" }}
                                    src={Temp2}
                                    objectFit="cover"
                                />
                                <Text className="overlay"
                                    css={{ fontSize: '$xs' }}>
                                    Dummer Article Title
                                </Text>
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
                                />
                                <Text className="overlay"
                                    css={{ fontSize: '$xs' }}>
                                    Dummer Article Title
                                </Text>
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
                            <Grid className="container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%", }}
                                    src={Temp3}
                                    objectFit="cover"
                                />
                                <Text className="overlay"
                                    css={{ fontSize: '$xs' }}>
                                    Dummer Article Title
                                </Text>
                            </Grid>
                            <Grid className="container"
                                css={{ height: "25vh", width: "100%", }}>
                                <Image
                                    css={{ height: "25vh", width: "100%" }}
                                    src={Temp4}
                                    objectFit="cover"
                                />
                                <Text className="overlay"
                                    css={{ fontSize: '$xs' }}>
                                    Dummer Article Title
                                </Text>
                            </Grid>

                        </Grid.Container>
                    </Grid.Container>

                    <Grid.Container
                        css={{ height: "50vh", width: "100%", position: "relative" }}
                        direction="row"
                    >
                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp5}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp6}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp7}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp8}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp9}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp10}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={Temp11}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>

                        <Grid className="container"
                            css={{ height: "25vh", width: "25%", }}>
                            <Image
                                css={{ height: "25vh", width: "100%", }}
                                src={AB171}
                                objectFit="cover"
                            />
                            <Text className="overlay"
                                css={{ fontSize: '$xs' }}>
                                Dummer Article Title
                            </Text>
                        </Grid>
                    </Grid.Container>

                </Grid.Container>

            </div>
            <div className="mobile">
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
                                    src={Divine}
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
                        To get email updates from SoundCheck™ India.
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

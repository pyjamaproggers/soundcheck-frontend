import { Col, Grid, Text, Card, Row, Button } from "@nextui-org/react";
import React from "react";
import Divine from '../../assets/Divine.jpeg'
import '../Post/post.css'
import AB171 from '../../assets/AB171.jpeg'
import './dashboard.css'

export default function Dashboard() {


    return (
        <>
            {/* If user logged in (check via context api) then show the dashboard (all posts saved by that username)*/}
            <Grid.Container>

                <Col css={{
                    margin: '0px 24px 12px 24px',
                    padding: '36px 0px 36px 0px',
                    borderStyle: 'solid',
                    borderWidth: '0px 0px 1px 0px',
                    borderColor: '$gray200'
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
                                    fontSize: '$xl',
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
                                    onPress={()=>{
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
                                    onPress={()=>{
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
                                    onPress={()=>{
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
                                    onPress={()=>{
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
                                    fontSize: '$xl',
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
                                                        w: "200px",
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
                                                        w: "200px",
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
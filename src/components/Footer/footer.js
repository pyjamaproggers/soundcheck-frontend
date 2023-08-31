import { Grid, Image, Row, Link, Col, Text, Input, Button } from "@nextui-org/react";
import './footer.css';
import React from "react";
import Logo from '../../assets/TempLogo.jpeg';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, FaBorderStyle, } from 'react-icons/fa';

export default function Footer() {
    return (
        // <Grid.Container
        //     css={{
        //         jc: 'center',
        //         textAlign: 'center',
        //         alignItems: 'center',
        //     }}>

        //     <Grid.Container gap={0}
        //         css={{
        //             jc: 'center',
        //             textAlign: 'center',
        //             alignItems: 'center',
        //             marginTop: '15px',
        //         }}>
        //         <Grid
        //             css={{
        //                 padding: '12px'
        //             }}>
        //             <Image
        //                 css={{
        //                     borderRadius: '12.5px'
        //                 }} src={Logo} width={'90px'} height={'90px'} />
        //         </Grid>
        //     </Grid.Container>

        //     <Grid.Container gap={0}
        //         css={{
        //             jc: 'center',
        //             textAlign: 'center',
        //             alignItems: 'center',

        //         }}>
        //         <Row
        //             css={{
        //                 jc: 'center',
        //                 textAlign: 'center',
        //                 alignItems: 'center'
        //             }}>
        //             <Grid.Container gap={0}
        //                 css={{
        //                     jc: 'center',
        //                     textAlign: 'center',
        //                     alignItems: 'center'
        //                 }}>
        //                 <Grid
        //                     css={{
        //                         padding: '12px'
        //                     }}>
        //                     <Link className="footnavbar-item" href="/">
        //                         Home
        //                     </Link>
        //                 </Grid>
        //                 <Grid
        //                     css={{
        //                         padding: '12px'
        //                     }}>
        //                     <Link className="footnavbar-item" href="/news" >
        //                         News
        //                     </Link>
        //                 </Grid>
        //                 <Grid
        //                     css={{
        //                         padding: '12px'
        //                     }}>
        //                     <Link className="footnavbar-item" href="/playlists" >
        //                         Playlists
        //                     </Link>
        //                 </Grid>
        //             </Grid.Container>
        //         </Row>
        //     </Grid.Container>

        //     <Row
        //         css={{
        //             margin: '5px 0px 20px 0px',
        //             jc: 'center',
        //             textAlign: 'center',
        //             alignItems: 'center'
        //         }}>
        //         <FaFacebookF onClick={() => { window.location = "https://www.facebook.com/FanUpInc/" }} className="icon" size={'20px'} />
        //         <FaYoutube onClick={() => { window.location = "https://www.facebook.com/FanUpInc/" }} className="icon" size={'20px'} />
        //         <FaInstagram onClick={() => { window.location = "https://www.instagram.com/fanup_inc/?hl=en" }} className="icon" size={'20px'} />
        //         <FaTwitter onClick={() => { window.location = "https://twitter.com/fanup_inc?s=20" }} className="icon" size={'20px'} />
        //     </Row>

        //     <Col>
        //         <Text
        //             css={{
        //                 color: '$gray700',
        //                 jc: 'center',
        //                 textAlign: 'center',
        //                 padding: '10px 0px',
        //                 borderStyle: 'solid',
        //                 borderColor: '#300313',
        //                 borderWidth: '1px 0px 0px 0px',
        //                 '@xsMax': {
        //                     fontSize: '$xs'
        //                 }
        //             }}>
        //             © 2023 SoundCheck India. All Rights Reserved.
        //         </Text>
        //     </Col>

        // </Grid.Container>
        <>
            <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'top',
                    marginTop: '120px',
                }}
            >
                <Grid
                    css={{
                        padding: '12px',
                        flexDirection: 'column',
                        minWidth: '250px',
                        '@smMin': {
                            width: '336px',
                            borderWidth: '0px 1px 0px 0px',
                            borderColor: '#300313',
                            borderStyle: 'solid',
                        },
                        '@smMax': {
                            width: '336px'
                        },
                    }}>
                    <Image
                        css={{
                            borderRadius: '12.5px'
                        }} src={Logo} width={'90px'} height={'90px'} />
                    <Row
                        css={{
                            margin: '20px 0px 10px 0px',
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                        <FaFacebookF onClick={() => { window.location = "https://www.facebook.com/FanUpInc/" }} className="icon" size={'20px'} />
                        <FaYoutube onClick={() => { window.location = "https://www.facebook.com/FanUpInc/" }} className="icon" size={'20px'} />
                        <FaInstagram onClick={() => { window.location = "https://www.instagram.com/fanup_inc/?hl=en" }} className="icon" size={'20px'} />
                        <FaTwitter onClick={() => { window.location = "https://twitter.com/fanup_inc?s=20" }} className="icon" size={'20px'} />
                    </Row>
                </Grid>

                <Grid
                    css={{
                        padding: '12px',
                        minWidth: '250px',
                        '@smMin': {
                            width: '336px'
                        },
                        '@smMax': {
                            width: '336px'
                        },
                    }}>
                    <Col css={{
                        flexDirection: 'column',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Link className="footnavbar-item" href="/" css={{
                            padding: '5px 0px'
                        }}>
                            Home
                        </Link>
                        <Link className="footnavbar-item" href="/news" css={{
                            padding: '5px 0px'
                        }} >
                            News
                        </Link>
                        <Link className="footnavbar-item" href="/playlists" css={{
                            padding: '5px 0px'
                        }} >
                            Playlists
                        </Link>
                    </Col>
                </Grid>

                <Grid css={{
                    '@smMin': {
                        borderWidth: '0px 0px 0px 1px',
                        borderColor: '#300313',
                        borderStyle: 'solid'
                    }
                }}>
                    <Col
                        css={{
                            width: 'max-content',
                            textAlign: 'center',
                            minWidth: '250px',
                            padding: '0px 10px'
                        }}>
                        <Text css={{
                            '@smMin': {
                                fontSize: '$2xl',
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
                                fontSize: '$md',
                            },
                            '@smMax': {
                                fontSize: '$md',
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
                </Grid>

            </Grid.Container>

            <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>

                <Col>
                    <Text
                        css={{
                            color: '$gray700',
                            jc: 'center',
                            textAlign: 'center',
                            padding: '10px 0px',
                            borderStyle: 'solid',
                            borderColor: '#300313',
                            borderWidth: '1px 0px 0px 0px',
                            '@xsMax': {
                                fontSize: '$xs'
                            }
                        }}>
                        © 2023 SoundCheck India. All Rights Reserved.
                    </Text>
                </Col>

            </Grid.Container>
        </>
    )
}
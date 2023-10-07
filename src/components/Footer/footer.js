import { Grid, Image, Row, Link, Col, Text, Input, Button } from "@nextui-org/react";
import './footer.css';
import React from "react";
import Logo from '../../assets/logo.jpeg';
import '@fontsource/roboto';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, FaSpotify, } from 'react-icons/fa';
import { SiApple, SiApplemusic } from 'react-icons/si'

export default function Footer() {
    return (
        <>
            <Grid.Container
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    marginTop: '24px',
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
                            borderColor: '#8b0214',
                            borderStyle: 'solid',
                        },
                        '@smMax': {
                            width: '336px'
                        },
                    }}>
                    <Image css={{
                        width: '100%',
                        height: '100px',
                        borderRadius: '5px',
                        left:0,
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }} src={Logo}
                        onClick={() => {
                            window.location.pathname = ''
                        }} />
                    <Row
                        css={{
                            margin: '20px 0px 10px 0px',
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                        <FaSpotify onClick={() => { window.location = "https://open.spotify.com/user/31ahbs772sa3yvxr4lxmogsab64i?si=7cdfb2397a3940bd&nd=1" }} className="icon" size={'20px'} />
                        <FaInstagram onClick={() => { window.location = "https://www.instagram.com/soundcheckindia_/" }} className="icon" size={'20px'} />
                        <FaTwitter onClick={() => { window.location = "https://twitter.com/SoundCheckIndia" }} className="icon" size={'20px'} />
                        <SiApplemusic onClick={() => { window.location = "https://music.apple.com/profile/SoundCheckIndia" }} className="icon" size={'20px'} />
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
                            padding: '5px 0px', fontFamily:"Roboto"
                        }}>
                            Home
                        </Link>
                        <Link className="footnavbar-item" href="/news" css={{
                            padding: '5px 0px', fontFamily:"Roboto"
                        }} >
                            News
                        </Link>
                        <Link className="footnavbar-item" href="/playlists" css={{
                            padding: '5px 0px', fontFamily:"Roboto"
                        }} >
                            Playlists
                        </Link>
                    </Col>
                </Grid>

                <Grid 
                css={{
                    padding: '12px',
                    '@smMin': {
                        borderWidth: '0px 0px 0px 1px',
                        borderColor: '#8b0214',
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
                            fontWeight: '$semibold', fontFamily:"Roboto"
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
                            color: '$gray600', fontFamily:"Roboto"
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
                                    backgroundColor: '#8b0214',
                                }}>
                                    <Text css={{
                                        fontWeight: 600, fontFamily:"Roboto"
                                    }}>
                                        Subscribe
                                    </Text>
                                </Button>
                            </Row>
                        </div>
                        <div className="subscribe-mobile">
                            <Input placeholder="Your email address" />
                            <Button auto flat color='error' css={{
                                backgroundColor: '#8b0214'
                            }}>
                                <Text css={{
                                    fontWeight: 600, fontFamily:"Roboto"
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
                            borderColor: '#8b0214',
                            borderWidth: '1px 0px 0px 0px',
                            '@xsMax': {
                                fontSize: '$xs'
                            }, fontFamily:"Roboto"
                        }}>
                        © 2023 SoundCheck India. All Rights Reserved.
                    </Text>
                </Col>

            </Grid.Container>
        </>
    )
}
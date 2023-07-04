import { Grid, Image, Row, Link, Col, Text } from "@nextui-org/react";
import './footer.css';
import React from "react";
import Logo from '../../assets/TempLogo.jpeg';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, } from 'react-icons/fa';

export default function Footer() {
    return (
        <Grid.Container
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
            }}>

            <Grid.Container gap={0}
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    marginTop: '15px',
                }}>
                <Grid
                    css={{
                        padding: '12px'
                    }}>
                    <Image
                        css={{
                            borderRadius: '12.5px'
                        }} src={Logo} width={'90px'} height={'90px'} />
                </Grid>
            </Grid.Container>

            <Grid.Container gap={0}
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center',

                }}>
                <Row
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                    <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}>
                        <Grid
                            css={{
                                padding: '12px'
                            }}>
                            <Link className="footnavbar-item" href="/">
                                Home
                            </Link>
                        </Grid>
                        <Grid
                            css={{
                                padding: '12px'
                            }}>
                            <Link className="footnavbar-item" href="/blogspage" >
                                Articles
                            </Link>
                        </Grid>
                        <Grid
                            css={{
                                padding: '12px'
                            }}>
                            <Link className="footnavbar-item" href="/contactus" >
                                Contact Us
                            </Link>
                        </Grid>
                    </Grid.Container>
                </Row>
            </Grid.Container>

            <Row
                css={{
                    margin: '5px 0px 20px 0px',
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                <FaFacebookF onClick={() => { window.location = "https://www.facebook.com/FanUpInc/" }} className="fb-icon" size={'24px'} />
                <FaYoutube onClick={() => { window.location = "https://www.facebook.com/FanUpInc/" }} className="yt-icon" size={'24px'} />
                <FaInstagram onClick={() => { window.location = "https://www.instagram.com/fanup_inc/?hl=en" }} className="ig-icon" size={'24px'} />
                <FaTwitter onClick={() => { window.location = "https://twitter.com/fanup_inc?s=20" }} className="t-icon" size={'24px'} />
            </Row>

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
    )
}
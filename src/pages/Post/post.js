import React, { useEffect, useState } from "react";
import { Grid, Image, Text, Row, Container, Col } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, } from 'react-icons/fa';
import './post.css'
import Divine from '../../assets/Divine.jpeg';
import { Scroll } from 'react-scroll-component';
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Post() {
    const location = useLocation();
    const current = new Date();
    const [month, setMonth] = useState('')
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [post, setPost] = useState(null);
    const id = location.pathname.split("/")[2]; 

    // if(post)
    // {
    //     console.log("post found")
    //     const twitterEmbedRegex = /<blockquote class="twitter-tweet"[^>]*>(.*?)<\/blockquote>\s*<script async src="https:\/\/platform\.twitter\.com\/widgets\.js"[^>]*><\/script>/g;
    //     const updatedDesc = post.desc.replace(twitterEmbedRegex, '<div dangerouslySetInnerHTML={{ __html: `$1` }} />');
    //     post.desc = updatedDesc
    //     console.log(updatedDesc)
    // }

    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);

    const setDate = () => {
        if (current.getMonth() + 1 == 1) {
            setMonth('January')
        }
        if (current.getMonth() + 1 == 2) {
            setMonth('February')
        }
        if (current.getMonth() + 1 == 3) {
            setMonth('March')
        }
        if (current.getMonth() + 1 == 4) {
            setMonth('April')
        }
        if (current.getMonth() + 1 == 5) {
            setMonth('May')
        }
        if (current.getMonth() + 1 == 6) {
            setMonth('June')
        }
        if (current.getMonth() + 1 == 7) {
            setMonth('July')
        }
        if (current.getMonth() + 1 == 8) {
            setMonth('August')
        }
        if (current.getMonth() + 1 == 9) {
            setMonth('September')
        }
        if (current.getMonth() + 1 == 10) {
            setMonth('October')
        }
        if (current.getMonth() + 1 == 11) {
            setMonth('November')
        }
        if (current.getMonth() + 1 == 1) {
            setMonth('December')
        }
    }

    const fetchpost = async () =>
    {
        try{
            const response = await axios.get(`http://localhost:8800/api/posts/${id}`);
            console.log("RESP"+response.data)
            setPost(response.data)
        }
        catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        fetchpost()
        setDate();
        // const s = document.createElement("script");
        // s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        // s.setAttribute("async", "true");
        // document.head.appendChild(s);
    }, [])

        return (
            <>
                <div className="desktop">
                    <Grid.Container
                        css={{
                            jc: 'space-between',
                            width: '100vw',
                            height: '100vh',
                            marginBottom: '64px'
                        }}>
    
                        <Grid.Container
                            css={{
                                margin: '8px 16px 16px 16px',
                                width: '22vw',
                                textAlign: 'center',
                                padding: '8px',
                                height: 'max-content',
                                float: 'left',
                                backgroundColor: 'rgb(20,20,20)'
                                // borderStyle: 'solid',
                                // borderWidth: '2px',
                                // borderColor: 'rgb(20,20,20)'
                            }}
                            direction="column">
                            <Text css={{ fontWeight: '$semibold', fontSize: '$xl', }}>
                                {month} {current.getDate()}, {current.getFullYear()}
                            </Text>
                            <Grid.Container css={{
                                alignItems: 'center',
                                jc: 'center',
                                p: '8px 0px 16px 0px'
                            }}>
                                <Grid>
                                    <Image css={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '5px',
                                        objectFit: 'cover'
                                    }}
                                        src={TempLogo} />
                                </Grid>
                                <Grid>
                                    <Text css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$xl',
                                        pl: '8px'
                                    }}>
                                        SoundCheck™ India
                                    </Text>
                                </Grid>
                            </Grid.Container>
                            <Grid.Container
                                css={{
                                    justifyContent: 'center',
                                }}>
                                <Grid >
                                    <FaFacebookF className="fb-icon" size={'30px'} />
                                </Grid>
                                <Grid>
                                    <FaInstagram className="ig-icon" size={'30px'} />
                                </Grid>
                                <Grid>
                                    <FaYoutube className="yt-icon" size={'30px'} />
                                </Grid>
                                <Grid>
                                    <FaTwitter className="t-icon" size={'30px'} />
                                </Grid>
                            </Grid.Container>
                        </Grid.Container>
    
                        <Scroll direction="vertical" height="100vh" >
                            <Grid.Container css={{
                                width: '50vw'
                            }}>
                                <Col>
                                { post &&
                                    <Text
                                        css={{
                                            fontWeight: '$semibold',
                                            fontSize: '$2xl',
                                            height: 'max-content'
                                        }}>
                                        {post.title}
                                    </Text>}
                                    { post &&
                                    <Image src={`http://localhost:8800${post.img.imageUrl}`} width={500} height={400}
                                        css={{
                                            width: 'max-content',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            margin: '48px 0px'
                                        }} />}
                                        { post &&
                                    <Text css={{
                                        margin: '8px 0px'
                                    }}>
                                         <div dangerouslySetInnerHTML={{ __html: `<div>${post.desc}</div>` }} />
                                    </Text>}
    
                                </Col>
                            </Grid.Container>
                        </Scroll>
    
    
                        <Grid.Container css={{
                            width: '22vw',
                            jc: 'center',
                            maxHeight: '100px',
                            float: "right"
                        }}>
                            <Text css={{
                                fontWeight: '$semibold',
                                fontSize: '$lg',
                                margin: '8px 0px'
                            }}>
                                MORE BY SoundCheck™
                            </Text>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={'30vw'}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={'30vw'}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={'30vw'}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={'30vw'}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={'30vw'}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={'30vw'}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
    
    
    
                        </Grid.Container>
                    </Grid.Container>
                </div>
                <div className="mobile">
                    <Grid.Container
                        css={{
                            width: '100vw',
                            jc: 'center',
                            padding: '12px'
                        }}>
                        <Text
                            css={{
                                fontWeight: '$semibold',
                                fontSize: '$xl',
                                height: 'max-content'
                            }}>
                            BREAKING: J TRIX & SUBSPACE LINK UP WITH INDIAN RAP PIONEER IKKA ON
                            NEW SINGLE 'GUNDAGARDI', PAY HOMAGE TO SIDHU MOOSE WALA
                        </Text>
                        <Image src={Divine} width={500} height={400}
                            css={{
                                width: 'max-content',
                                height: 'auto',
                                objectFit: 'cover',
                                margin: '48px 0px'
                            }} />
                        <Text css={{
                            margin: '8px 0px'
                        }}>
                            Within a day of announcing his sophomore EP “Middle Class Boys”,
                            Kolkata, West Bengals hard-hitting emcee J Trix has released the lead
                            single from the project. Titled “Gundagardi”, the ruthless rap record
                            is produced by Trixs longtime collaborator Subspace and features a
                            fiery guest verse by Indian Rap pioneer Ikka. Ikkas feature on J Trixs
                            lead single is unprecedented but certainly not surprising. However, as
                            reported earlier, the EP is slated to release through Indian Raps
                            coveted record label Def Jam Recordings India. Given the labels
                            longtime association with Indian Hip-Hop pioneers including Ikka,
                            Badshah and Dino James, the star-studded major label release has
                            stirred massive hype on Trixs social media ahead of his EP. Further,
                            the legendary emcee Ikka remembered the late Punjabi Hip-Hop and Drill
                            superstar Sidhu Moose Wala on the record. Ikka is one of the many
                            emcees who continue to mourn Moosas death in Punjab last year.
                        </Text>
                        <Text css={{
                            margin: '8px 0px'
                        }}>
                            Within a day of announcing his sophomore EP “Middle Class Boys”,
                            Kolkata, West Bengals hard-hitting emcee J Trix has released the lead
                            single from the project. Titled “Gundagardi”, the ruthless rap record
                            is produced by Trixs longtime collaborator Subspace and features a
                            fiery guest verse by Indian Rap pioneer Ikka. Ikkas feature on J Trixs
                            lead single is unprecedented but certainly not surprising. However, as
                            reported earlier, the EP is slated to release through Indian Raps
                            coveted record label Def Jam Recordings India. Given the labels
                            longtime association with Indian Hip-Hop pioneers including Ikka,
                            Badshah and Dino James, the star-studded major label release has
                            stirred massive hype on Trixs social media ahead of his EP. Further,
                            the legendary emcee Ikka remembered the late Punjabi Hip-Hop and Drill
                            superstar Sidhu Moose Wala on the record. Ikka is one of the many
                            emcees who continue to mourn Moosas death in Punjab last year.
                        </Text>
                        <Text css={{
                            margin: '8px 0px'
                        }}>
                            Within a day of announcing his sophomore EP “Middle Class Boys”,
                            Kolkata, West Bengals hard-hitting emcee J Trix has released the lead
                            single from the project. Titled “Gundagardi”, the ruthless rap record
                            is produced by Trixs longtime collaborator Subspace and features a
                            fiery guest verse by Indian Rap pioneer Ikka. Ikkas feature on J Trixs
                            lead single is unprecedented but certainly not surprising. However, as
                            reported earlier, the EP is slated to release through Indian Raps
                            coveted record label Def Jam Recordings India. Given the labels
                            longtime association with Indian Hip-Hop pioneers including Ikka,
                            Badshah and Dino James, the star-studded major label release has
                            stirred massive hype on Trixs social media ahead of his EP. Further,
                            the legendary emcee Ikka remembered the late Punjabi Hip-Hop and Drill
                            superstar Sidhu Moose Wala on the record. Ikka is one of the many
                            emcees who continue to mourn Moosas death in Punjab last year.
                        </Text>
                        <Text css={{
                            margin: '8px 0px'
                        }}>
                            Within a day of announcing his sophomore EP “Middle Class Boys”,
                            Kolkata, West Bengals hard-hitting emcee J Trix has released the lead
                            single from the project. Titled “Gundagardi”, the ruthless rap record
                            is produced by Trixs longtime collaborator Subspace and features a
                            fiery guest verse by Indian Rap pioneer Ikka. Ikkas feature on J Trixs
                            lead single is unprecedented but certainly not surprising. However, as
                            reported earlier, the EP is slated to release through Indian Raps
                            coveted record label Def Jam Recordings India. Given the labels
                            longtime association with Indian Hip-Hop pioneers including Ikka,
                            Badshah and Dino James, the star-studded major label release has
                            stirred massive hype on Trixs social media ahead of his EP. Further,
                            the legendary emcee Ikka remembered the late Punjabi Hip-Hop and Drill
                            superstar Sidhu Moose Wala on the record. Ikka is one of the many
                            emcees who continue to mourn Moosas death in Punjab last year.
                        </Text>
                        <Text css={{
                            margin: '8px 0px'
                        }}>
                            Within a day of announcing his sophomore EP “Middle Class Boys”,
                            Kolkata, West Bengals hard-hitting emcee J Trix has released the lead
                            single from the project. Titled “Gundagardi”, the ruthless rap record
                            is produced by Trixs longtime collaborator Subspace and features a
                            fiery guest verse by Indian Rap pioneer Ikka. Ikkas feature on J Trixs
                            lead single is unprecedented but certainly not surprising. However, as
                            reported earlier, the EP is slated to release through Indian Raps
                            coveted record label Def Jam Recordings India. Given the labels
                            longtime association with Indian Hip-Hop pioneers including Ikka,
                            Badshah and Dino James, the star-studded major label release has
                            stirred massive hype on Trixs social media ahead of his EP. Further,
                            the legendary emcee Ikka remembered the late Punjabi Hip-Hop and Drill
                            superstar Sidhu Moose Wala on the record. Ikka is one of the many
                            emcees who continue to mourn Moosas death in Punjab last year.
                        </Text>
                    </Grid.Container>
    
                    <Grid.Container css={{
                            jc: 'center',
                            padding: '0px 8px'
                        }}>
                            <Text css={{
                                fontWeight: '$semibold',
                                fontSize: '$lg',
                                margin: '8px 0px'
                            }}>
                                MORE BY SoundCheck™
                            </Text>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={400}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={400}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={400}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={400}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
                            <Row css={{
                                padding: '0px 4px 0px 0px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'rgb(20,20,20)',
                                margin: '8px',
                            }}>
                                <Image src={Divine}
                                    width={400}
                                    css={{
                                        height: '91px',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis"
                                    css={{
                                        fontWeight: '$semibold',
                                        fontSize: '$md',
                                        height: '100%',
                                        paddingLeft: '4px'
                                    }}>
                                    DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
                                </Text>
                            </Row>
    
    
    
    
    
                        </Grid.Container>
                </div>
            </>
        );
    }

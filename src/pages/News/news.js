import React, { useEffect, useState } from "react";
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
import { Grid, Image, Row, Col, Text, Loading } from "@nextui-org/react";
import './news.css'

export default function News() {
    const [fetching, setFetching] = useState(true)
    const [publishedPosts, setPublishedPosts] = useState()

    const posts = [
        {
            id: '',
            username: 'aryan',
            title: 'Post 1',
            desc: '',
            image: Divine,
            isdraft: 'y',
            date: '',
        },
        {
            id: '',
            username: 'aryan',
            title: 'Post 2',
            desc: '',
            image: AB171,
            isdraft: 'y',
            date: '',
        },
        {
            id: '',
            username: 'zahaan',
            title: 'Post 3',
            desc: '',
            image: AB172,
            isdraft: 'y',
            date: '',
        },
        {
            id: '',
            username: 'aryan',
            title: 'AFTER LOGIC AND METRO BOOMIN, WIZ KHALIFA PARTS WAYS WITH RAP MUSIC CATALOGUE FOR UNDISCLOSED FIGURES',
            desc: '',
            image: Temp1,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'zahaan',
            title: 'DRAKE GIVES VIRGIL ABLOH HIS FLOWERS AT ITS ALL A BLUR TOUR, HUMILIATES OVERRATED CHILDISH GAMBINO',
            desc: '',
            image: Temp2,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'aryan',
            title: 'Post 6',
            desc: '',
            image: Temp3,
            isdraft: 'y',
            date: '',
        },
        {
            id: '',
            username: 'aryan',
            title: 'BREAKING: AFTER PARTING WAYS WITH KALAMKAAR, KARMA SIGNS EXCLUSIVELY W/ MALSONS REP. SHUBH, GRAVITY & MORE',
            desc: '',
            image: Temp4,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'zahaan',
            title: 'SHOOTER KAHLON SHARES RARE CONVERSATION WITH SIDHU MOOSE WALA AHEAD OF GAME SINGLE',
            desc: '',
            image: Temp5,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'zahaan',
            title: 'BREAKING: SEEDHE MAUT LAYS SEIGE TO INDIAN RAP ON BHUSSI MUSIC VIDEO BY KSHMR F/ KARAN KANCHAN',
            desc: '',
            image: Temp6,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'aryan',
            title: 'BREAKING: 2 SONGS FROM DRAKES UPCOMING ALBUM FOR ALL THE DOGS LEAK ONLINE',
            desc: '',
            image: Temp7,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'aryan',
            title: 'Post 11',
            desc: '',
            image: Temp8,
            isdraft: 'y',
            date: '',
        },
        {
            id: '',
            username: 'zahaan',
            title: 'BRAMPTON NEIGHBOURHOOD UNVEILS MURAL DEDICATED TO SIDHU MOOSE WALA, TUPAC SHAKUR, THE NOTORIOUS B.I.G. & MORE',
            desc: '',
            image: Temp9,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'zahaan',
            title: 'BREAKING: INDIAN HIP-HOP SUPERSTAR MC STAN ANNOUNCES NEW ALBUM',
            desc: '',
            image: Temp10,
            isdraft: 'n',
            date: '',
        },
        {
            id: '',
            username: 'zahaan',
            title: 'NICKI MINAJ RAPS FOR RIHANNA ON BECOMING THE FIRST FEMALE ARTIST WITH 10 SONGS OVER A BILLION SPOTIFY STREAMS',
            desc: '',
            image: Temp11,
            isdraft: 'n',
            date: '',
        },
    ]

    const segregatePosts = () => {
        var published = []
        var i
        for (i = 0; i < posts.length; i++) {
            if (posts[i].isdraft == 'n') {
                published.push(posts[i])
            }
        }
        console.log(published)
        setPublishedPosts(published)
        setFetching(false)
    }

    useEffect(() => {
        setFetching(true)
        window.setTimeout(() => {
            segregatePosts()
        }, 3000);
    }, [])

    return (
        <div className="home">

            <div className="desktop">

                <Grid.Container css={{
                    jc: 'center'
                }}>
                    <Col>
                        <Text css={{
                            width: '100vw',
                            fontWeight: '$semibold',
                            '@xsMax': {
                                fontSize: '$xl',
                            },
                            '@xsMin': {
                                fontSize: '$3xl',
                            },
                            textAlign: 'center',
                            margin: '24px 0px 0px 0px'
                        }}>
                            Latest Trends
                        </Text>
                        <Text css={{
                            width: '100vw',
                            fontWeight: '$semibold',
                            '@xsMax': {
                                fontSize: '$sm',
                                paddingBottom: '24px'
                            },
                            '@xsMin': {
                                fontSize: '$lg',
                            },
                            textAlign: 'center',
                            margin: '6px 0px 0px 0px'
                        }}>
                            News & Updates of the Desi Hip-Hop world brought right to you.
                        </Text>
                    </Col>

                    {fetching &&
                        <Loading css={{ padding: '30vh 0px' }} color={'white'} size="xl" />
                    }

                    {publishedPosts && !fetching &&
                        <>
                            {publishedPosts.map((post, index) => (
                                <Grid css={{
                                    m: '24px',
                                    maxW: '900px',
                                    backgroundColor: 'black',
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }} key={index}
                                    onClick={() => {
                                        // navigate to that post's page to read post
                                    }}
                                >
                                    <Row>
                                        <Image
                                            src={post.image}
                                            width={300}
                                            height={180}
                                            css={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }} />
                                        <Col css={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'stretch',
                                            jc: 'space-evenly',
                                            padding: '6px 0px',
                                            height: '180px'
                                        }}>
                                            <Text className="multiline-ellipsis-3" css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '6px 0px 2px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '0px 0px 1px 0px',
                                                borderColor: '$red200',
                                            }}>
                                                {post.title}
                                            </Text>
                                            <Text className="multiline-ellipsis-2" css={{
                                                fontWeight: '$normal',
                                                fontSize: '$lg',
                                                padding: '6px 24px',
                                                minWidth: '75px'
                                            }}>
                                                post.desc post.desc post.desc post.desc post.desc post.desc post.desc
                                                post.desc post.desc post.desc post.desc post.desc post.desc post.desc
                                                post.desc post.desc post.desc post.desc post.desc post.desc post.desc
                                            </Text>
                                            <Text css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '2px 0px 0px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '1px 0px 0px 0px',
                                                borderColor: '$red200',
                                                width: 'max-content'
                                            }}>
                                                post.date
                                                {/* {post.date} */}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            ))}
                        </>
                    }

                </Grid.Container>
                
            </div>

            <div className="mobile">

                <Grid.Container css={{
                    jc: 'center',
                }}>
                    <Col>
                        <Text css={{
                            width: '100vw',
                            fontWeight: '$semibold',
                            '@xsMax': {
                                fontSize: '$xl',
                            },
                            '@xsMin': {
                                fontSize: '$3xl',
                            },
                            textAlign: 'center',
                            margin: '24px 0px 0px 0px'
                        }}>
                            Latest Trends
                        </Text>
                        <Text css={{
                            fontWeight: '$semibold',
                            '@xsMax': {
                                fontSize: '$sm',
                                paddingBottom: '24px'
                            },
                            '@xsMin': {
                                fontSize: '$lg',
                            },
                            textAlign: 'center',
                            margin: '6px 16px 0px 16px'
                        }}>
                            News & Updates of the Desi Hip-Hop world brought right to you.
                        </Text>
                    </Col>

                    {fetching &&
                        <Loading css={{ padding: '30vh 0px' }} color={'white'} size="xl" />
                    }

                    {publishedPosts && !fetching && 
                    <>
                    {publishedPosts.map((post,index)=>(
                        <Grid css={{
                            m: '24px',
                            width: '100%',
                            backgroundColor: 'black',
                            '&:hover': {
                                cursor: 'pointer'
                            },
                            paddingBottom: '12px'
                        }}>
                            <Col>
                                <Image
                                    src={post.image}
                                    width={'100%'}
                                    height={220}
                                    css={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }} />
                                <Text className="multiline-ellipsis-3" css={{
                                    fontWeight: '$semibold',
                                    fontSize: '$lg',
                                    padding: '6px 0px 2px 0px',
                                    margin: '0px 24px 0px 24px',
                                    borderStyle: 'solid',
                                    borderWidth: '0px 0px 1px 0px',
                                    borderColor: '$red200',
                                }}>
                                    {post.title}
                                </Text>
                                <Text className="multiline-ellipsis-2" css={{
                                    fontWeight: '$normal',
                                    fontSize: '$lg',
                                    padding: '6px 24px',
                                    minWidth: '75px'
                                }}>
                                    post.desc post.desc post.desc post.desc post.desc post.desc post.desc
                                    post.desc post.desc post.desc post.desc post.desc post.desc post.desc
                                    post.desc post.desc post.desc post.desc post.desc post.desc post.desc
                                </Text>
                                <Text css={{
                                    fontWeight: '$semibold',
                                    fontSize: '$lg',
                                    padding: '2px 0px 0px 0px',
                                    margin: '0px 24px 0px 24px',
                                    borderStyle: 'solid',
                                    borderWidth: '1px 0px 0px 0px',
                                    borderColor: '$red200',
                                    width: 'max-content'
                                }}>
                                    post.date
                                    {/* {post.date} */}
                                </Text>
                            </Col>
                        </Grid>
                    ))}
                    </>
                    }

                </Grid.Container>
                
            </div>
        </div>
    )
}
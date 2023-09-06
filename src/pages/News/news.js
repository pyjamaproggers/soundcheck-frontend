import React, { useEffect, useState } from 'react';
import { Grid, Image, Row, Col, Text, Loading, Input, Link } from '@nextui-org/react';
import './news.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function News() {
    const [fetching, setFetching] = useState(true);
    const [publishedPosts, setPublishedPosts] = useState();
    const [dateLatest, setDateLatest] = useState(true);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [searched, setSearched] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([]); 



    function getDayWithSuffix(day) {
        if (day >= 11 && day <= 13) {
            return `${day}th`;
        } else {
            const lastDigit = day % 10;
            switch (lastDigit) {
                case 1:
                    return `${day}st`;
                case 2:
                    return `${day}nd`;
                case 3:
                    return `${day}rd`;
                default:
                    return `${day}th`;
            }
        }
    }

    function convertDate(date) {

        const originalDate = new Date(date);


        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const day = originalDate.getDate();
        const month = monthNames[originalDate.getMonth()];
        const year = originalDate.getFullYear();


        return `${getDayWithSuffix(day)} ${month} ${year}`;
    }

    const segregatePosts = async () => {
        const published = posts.filter((post) => post.isdraft === 'n');
        setPublishedPosts(published);
    };

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://soundcheck-backend.onrender.com/api/posts');
            console.log(response.data);
            setPosts(response.data);
            await segregatePosts(); // Call segregatePosts after setting the posts state
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

    useEffect(() => {
        segregatePosts();
    }, [posts]);

    useEffect(() => {
        if (searched.trim() === '') {
            setFilteredPosts(publishedPosts);
        } else {
            const filtered = publishedPosts.filter((post) =>
                post.title.toLowerCase().includes(searched.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }, [searched, publishedPosts]);

    return (
        <div className="home">
            <div className="desktop">
                <Grid.Container css={{ jc: 'center' }}>
                    <Col
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                        }}
                    >
                        <Text
                            css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$xl',
                                },
                                '@xsMin': {
                                    fontSize: '$3xl',
                                },
                                textAlign: 'center',
                                margin: '24px 0px 0px 0px',
                            }}
                        >
                            Latest Trends
                        </Text>
                        <Text
                            css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$sm',
                                    paddingBottom: '24px',
                                },
                                '@xsMin': {
                                    fontSize: '$lg',
                                },
                                textAlign: 'center',
                                margin: '6px 0px 0px 0px',
                            }}
                        >
                            News & Updates of the Desi Hip-Hop world brought right to you.
                        </Text>
                        <Row
                            css={{
                                margin: '36px 0 0px 0',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Input
                                css={{
                                    width: '300px',
                                }}
                                labelPlaceholder="Search & Filter"
                                onChange={(e)=>{
                                    setSearched(e.target.value)
                                }}
                            />
                            <Row
                                css={{
                                    alignItems: 'center',
                                    jc: 'center',
                                    width: 'max-content',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => {
                                    setDateLatest(!dateLatest);
                                }}
                            >
                                <Text
                                    css={{
                                        fontWeight: '$semibold',
                                        padding: '0px 4px 0px 8px',
                                    }}
                                >
                                    Date
                                </Text>
                                {dateLatest && <FaChevronUp size={10} />}
                                {!dateLatest && <FaChevronDown size={10} />}
                            </Row>
                        </Row>
                        {fetching && <Loading css={{ padding: '30vh 0px' }} color={'white'} size="xl" />}
                    </Col>

                    {filteredPosts.length > 0 && !fetching && (
                        <>
                            {filteredPosts.map((post, index) => (
                                <Grid
                                    css={{
                                        m: '24px',
                                        maxW: '900px',
                                        backgroundColor: 'black',
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                    }}
                                    key={index}
                                    onClick={() => {
                                        navigate(`/posts/${post._id}`);
                                    }}
                                >
                                    <Row>
                                        <Image
                                            src={`${post.homeImg}`}
                                            width={300}
                                            height={180}
                                            css={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <Col
                                            css={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'stretch',
                                                jc: 'space-evenly',
                                                padding: '6px 0px',
                                                height: '180px',
                                            }}
                                        >
                                            <Text
                                                className="multiline-ellipsis-3"
                                                css={{
                                                    fontWeight: '$semibold',
                                                    fontSize: '$lg',
                                                    padding: '6px 0px 2px 0px',
                                                    margin: '0px 24px 0px 24px',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '#8b0214',
                                                }}
                                            >
                                                {post.title.toUpperCase()}
                                            </Text>
                                            <Text
                                                className="multiline-ellipsis-2"
                                                css={{
                                                    fontWeight: '$normal',
                                                    fontSize: '$lg',
                                                    padding: '6px 24px',
                                                    minWidth: '75px',
                                                }}
                                            >
                                                {JSON.parse(post.desc).blocks[0].text}
                                            </Text>
                                            <Text
                                                css={{
                                                    fontWeight: '$semibold',
                                                    fontSize: '$lg',
                                                    padding: '2px 0px 0px 0px',
                                                    margin: '0px 24px 0px 24px',
                                                    borderStyle: 'solid',
                                                    borderWidth: '1px 0px 0px 0px',
                                                    borderColor: '#8b0214',
                                                    width: 'max-content',
                                                }}
                                            >
                                                {convertDate(post.date.slice(0, 10))}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid.Container>
            </div>

            <div className="mobile">
                <Grid.Container css={{ jc: 'center' }}>
                    <Col
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                        }}
                    >
                        <Text
                            css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$xl',
                                },
                                '@xsMin': {
                                    fontSize: '$3xl',
                                },
                                textAlign: 'center',
                                margin: '24px 0px 0px 0px',
                            }}
                        >
                            Latest Trends
                        </Text>
                        <Text
                            css={{
                                fontWeight: '$semibold',
                                '@xsMax': {
                                    fontSize: '$sm',
                                    paddingBottom: '6px',
                                },
                                '@xsMin': {
                                    fontSize: '$lg',
                                },
                                textAlign: 'center',
                                margin: '6px 16px 0px 16px',
                            }}
                        >
                            News & Updates of the Desi Hip-Hop world brought right to you.
                        </Text>
                        <Row
                            css={{
                                margin: '36px 0 0px 0',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Input
                                css={{
                                    width: '250px',
                                }}
                                labelPlaceholder="Search & Filter"
                                onChange={(e)=>{
                                    setSearched(e.target.value)
                                }}
                            />
                            <Row
                                css={{
                                    alignItems: 'center',
                                    jc: 'center',
                                    width: 'max-content',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => {
                                    setDateLatest(!dateLatest);
                                }}
                            >
                                <Text
                                    css={{
                                        fontWeight: '$semibold',
                                        padding: '0px 4px 0px 8px',
                                    }}
                                >
                                    Date
                                </Text>
                                {dateLatest && <FaChevronUp size={10} />}
                                {!dateLatest && <FaChevronDown size={10} />}
                            </Row>
                        </Row>
                        {fetching && <Loading css={{ padding: '30vh 0px' }} color={'white'} size="xl" />}
                    </Col>

                    {publishedPosts && !fetching && (
                        <>
                            {publishedPosts.map((post, index) => (
                                <Grid
                                    css={{
                                        m: '24px',
                                        width: '100%',
                                        backgroundColor: 'black',
                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                        paddingBottom: '12px',
                                    }}
                                    key={index}
                                    onClick={() => {
                                        navigate(`/posts/${post._id}`);
                                    }}
                                >
                                    <Col>
                                        <Image
                                            src={`${post.homeImg}`}
                                            width={'100%'}
                                            height={220}
                                            css={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <Text
                                            className="multiline-ellipsis-3"
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '6px 0px 2px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '0px 0px 1px 0px',
                                                borderColor: '#8b0214',
                                            }}
                                        >
                                            {post.title.toUpperCase()}
                                        </Text>
                                        <Text
                                            className="multiline-ellipsis-3"
                                            css={{
                                                fontWeight: '$normal',
                                                fontSize: '$lg',
                                                padding: '6px 24px',
                                                minWidth: '75px',
                                            }}
                                        >
                                            {JSON.parse(post.desc).blocks[0].text}
                                        </Text>
                                        <Text
                                            css={{
                                                fontWeight: '$semibold',
                                                fontSize: '$lg',
                                                padding: '2px 0px 0px 0px',
                                                margin: '0px 24px 0px 24px',
                                                borderStyle: 'solid',
                                                borderWidth: '1px 0px 0px 0px',
                                                borderColor: '#8b0214',
                                                width: 'max-content',
                                            }}
                                        >
                                            {convertDate(post.date.slice(0, 10))}
                                        </Text>
                                    </Col>
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid.Container>
            </div>
        </div>
    );
}

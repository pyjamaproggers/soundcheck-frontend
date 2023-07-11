import React, { useEffect, useState } from "react";
import { Grid, Image, Text, Row, Container, Col } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './post.css'
import Divine from '../../assets/Divine.jpeg';
import { Scroll } from 'react-scroll-component';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { convertFromRaw, EditorState, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function Post() {
  const location = useLocation();
  const current = new Date();
  const [month, setMonth] = useState('')
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [post, setPost] = useState(null);
  const id = location.pathname.split("/")[2];

  const setDate = () => {
    if (current.getMonth() + 1 === 1) {
      setMonth('January')
    }
    if (current.getMonth() + 1 === 2) {
      setMonth('February')
    }
    if (current.getMonth() + 1 === 3) {
      setMonth('March')
    }
    if (current.getMonth() + 1 === 4) {
      setMonth('April')
    }
    if (current.getMonth() + 1 === 5) {
      setMonth('May')
    }
    if (current.getMonth() + 1 === 6) {
      setMonth('June')
    }
    if (current.getMonth() + 1 === 7) {
      setMonth('July')
    }
    if (current.getMonth() + 1 === 8) {
      setMonth('August')
    }
    if (current.getMonth() + 1 === 9) {
      setMonth('September')
    }
    if (current.getMonth() + 1 === 10) {
      setMonth('October')
    }
    if (current.getMonth() + 1 === 11) {
      setMonth('November')
    }
    if (current.getMonth() + 1 === 12) {
      setMonth('December')
    }
  }

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPost();
    setDate();
  }, [])

  const renderPostContent = () => {
    if (!post) {
      return null;
    }
  
    const contentState = convertFromRaw(JSON.parse(post.desc));
    const editorState = EditorState.createWithContent(contentState);
    const htmlContent = stateToHTML(contentState);
  
    // Function to extract the tweet link from the post description
    const extractTweetLink = (content) => {
      const regex = /(https:\/\/twitter\.com\/\w+\/status\/\d+)/;
      const match = content.match(regex);
      return match ? match[1] : null;
    };
  
    // Get the tweet link from the post description
    const tweetLink = extractTweetLink(htmlContent);
    const parts = htmlContent.split(tweetLink);
  
    const extractTweetId = (link) => {
      const regex = /\/(\d+)$/;
      const match = link.match(regex);
      return match ? match[1] : null;
    };
  
    // Get the tweet ID from the tweet link
    const tweetId = extractTweetId(tweetLink);
  
    const renderedContent = parts.map((part, index) => (
      <React.Fragment key={index}>
        <div dangerouslySetInnerHTML={{ __html: part }} />
        {index !== parts.length - 1 && (
          <div>
            <TwitterTweetEmbed tweetId={tweetId} />
          </div>
        )}
      </React.Fragment>
    ));
  
    return (
      <>
        <Text css={{ fontWeight: '$semibold', fontSize: '$2xl', height: 'max-content' }}>
          {post.title}
        </Text>
        <Image
          src={`http://localhost:8800${post.img.imageUrl}`}
          width={500}
          height={400}
          css={{
            width: 'max-content',
            height: 'auto',
            objectFit: 'cover',
            margin: '48px 0px'
          }}
        />
        {renderedContent}
      </>
    );
  };
  
  
  
  

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
            }}
            direction="column">
            <Text css={{ fontWeight: '$semibold', fontSize: '$xl' }}>
              {month} {current.getDate()}, {current.getFullYear()}
            </Text>
            <Grid.Container css={{ alignItems: 'center', jc: 'center', p: '8px 0px 16px 0px' }}>
              <Grid>
                <Image
                  css={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '5px',
                    objectFit: 'cover'
                  }}
                  src={TempLogo}
                />
              </Grid>
              <Grid>
                <Text css={{ fontWeight: '$semibold', fontSize: '$xl', pl: '8px' }}>
                  SoundCheck™ India
                </Text>
              </Grid>
            </Grid.Container>
            <Grid.Container css={{ justifyContent: 'center' }}>
              <Grid>
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

          <Scroll direction="vertical" height="100vh">
            <Grid.Container css={{ width: '50vw' }}>
              <Col>
                {renderPostContent()}
              </Col>
            </Grid.Container>
          </Scroll>

          <Grid.Container css={{ width: '22vw', jc: 'center', maxHeight: '100px', float: "right" }}>
            <Text css={{ fontWeight: '$semibold', fontSize: '$lg', margin: '8px 0px' }}>
              MORE BY SoundCheck™
            </Text>

            <Row css={{
              padding: '0px 4px 0px 0px',
              borderStyle: 'solid',
              borderWidth: '2px',
              borderColor: 'rgb(20,20,20)',
              margin: '8px',
            }}>
              <Image src={Divine} width={'30vw'} css={{ height: '91px', objectFit: 'cover' }} />
              <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
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
              <Image src={Divine} width={'30vw'} css={{ height: '91px', objectFit: 'cover' }} />
              <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
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
              <Image src={Divine} width={'30vw'} css={{ height: '91px', objectFit: 'cover' }} />
              <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
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
              <Image src={Divine} width={'30vw'} css={{ height: '91px', objectFit: 'cover' }} />
              <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
                DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
              </Text>
            </Row>
          </Grid.Container>
        </Grid.Container>
      </div>
      <div className="mobile">
        <Grid.Container css={{ width: '100vw', jc: 'center', padding: '12px' }}>
          {renderPostContent()}
        </Grid.Container>

        <Grid.Container css={{ jc: 'center', padding: '0px 8px' }}>
          <Text css={{ fontWeight: '$semibold', fontSize: '$lg', margin: '8px 0px' }}>
            MORE BY SoundCheck™
          </Text>

          <Row css={{
            padding: '0px 4px 0px 0px',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: 'rgb(20,20,20)',
            margin: '8px',
          }}>
            <Image src={Divine} width={400} css={{ height: '91px', objectFit: 'cover' }} />
            <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
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
            <Image src={Divine} width={400} css={{ height: '91px', objectFit: 'cover' }} />
            <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
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
            <Image src={Divine} width={400} css={{ height: '91px', objectFit: 'cover' }} />
            <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
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
            <Image src={Divine} width={400} css={{ height: '91px', objectFit: 'cover' }} />
            <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
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
            <Image src={Divine} width={400} css={{ height: '91px', objectFit: 'cover' }} />
            <Text className="multiline-ellipsis" css={{ fontWeight: '$semibold', fontSize: '$md', height: '100%', paddingLeft: '4px' }}>
              DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE DUMMY ARTICLE TITLE
            </Text>
          </Row>
        </Grid.Container>
      </div>
    </>
  );
}

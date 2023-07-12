import React, { useEffect, useState } from "react";
import { Grid, Image, Text, Row, Container, Col } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './post.css';
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
  const [month, setMonth] = useState('');
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [post, setPost] = useState(null);
  const id = location.pathname.split("/")[2];

  const setDate = () => {
    if (current.getMonth() + 1 === 1) {
      setMonth('January');
    }
    if (current.getMonth() + 1 === 2) {
      setMonth('February');
    }
    // ... Handle other months
  };

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    setDate();
  }, []);

  const renderPostContent = () => {
    if (!post) {
      return null;
    }

    const contentState = convertFromRaw(JSON.parse(post.desc));
    const editorState = EditorState.createWithContent(contentState);
    const htmlContent = stateToHTML(contentState);

    // Function to replace links with embeds
    const replaceLinks = (content) => {
      // Function to extract the tweet link from the content
      const extractTweetLink = (text) => {
        const regex = /(https:\/\/twitter\.com\/\w+\/status\/\d+)/;
        const match = text.match(regex);
        return match ? match[1] : null;
      };

      // Function to extract the YouTube video link from the content
      const extractYouTubeLink = (text) => {
        const regex = /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&?\n\s<]+)/;
        const match = text.match(regex);
        return match ? match[1] : null;
      };

      // Function to extract the Instagram post link from the content
      const extractInstagramLink = (text) => {
        const regex = /(https:\/\/www\.instagram\.com\/p\/\w+)/;
        const match = text.match(regex);
        return match ? match[1] : null;
      };

      // Function to extract the Spotify link from the content
      const extractSpotifyLink = (text) => {
        const regex = /(https:\/\/open\.spotify\.com\/\w+\/\w+\S+)/;
        const match = text.match(regex);
        return match ? match[1] : null;
      };

      // Function to extract the Apple Music link from the content
      const extractAppleMusicLink = (text) => {
        const regex = /\/(in\/album\/.*)/;
        const match = text.match(regex);
        return match ? match[1] : null;
      };

      const tweetLink = extractTweetLink(content);
      const youTubeLink = extractYouTubeLink(content);
      const instagramLink = extractInstagramLink(content);
      const spotifyLink = extractSpotifyLink(content);
      const appleMusicLink = extractAppleMusicLink(content);

      // Replace tweet link with Twitter embed
      if (tweetLink) {
        content = content.replace(tweetLink, `<div><TwitterTweetEmbed tweetId="${tweetLink}" /></div>`);
      }

      // Replace YouTube link with YouTube video embed
      if (youTubeLink) {
        content = content.replace(youTubeLink, `<div><iframe width="560" height="315" src="https://www.youtube.com/embed/${youTubeLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`);
      }

      // Replace Instagram link with Instagram post embed
      if (instagramLink) {
        content = content.replace(instagramLink, `<div><blockquote className="instagram-media" data-instgrm-permalink="${instagramLink}" data-instgrm-version="13" style={{ background: "#FFF", border: "0", borderRadius: "3px", boxShadow: "0 0 1px 0 rgba(0,0,0,0.5)", display: "block", margin: "1px", maxWidth: "540px", minWidth: "326px", padding: "0", width: "calc(100% - 2px)" }}></blockquote></div>`);
      }

      // Replace Spotify link with Spotify embed
      if (spotifyLink) {
        content = content.replace(spotifyLink, `<div><iframe style={{ borderRadius: '12px' }} src="${spotifyLink}" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`);
      }

      // Replace Apple Music link with Apple Music embed
      if (appleMusicLink) {
        content = content.replace(appleMusicLink, `<div><iframe style={{ width: "70%" }} allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/${appleMusicLink}"></iframe></div>`);
      }

      return content;
    };

    const renderedContent = (
      <div dangerouslySetInnerHTML={{ __html: replaceLinks(htmlContent) }} />
    );

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
          }}
        >
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
            direction="column"
          >
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
        </Grid.Container>
      </div>
    </>
  );
}

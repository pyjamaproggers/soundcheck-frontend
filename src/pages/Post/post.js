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
      const response = await axios.get(`https://soundcheck-backend.onrender.com//api/posts/${id}`);
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

    // Function to extract the tweet link from the post description
    const extractTweetLinks = (content) => {
      const regex = /(https:\/\/twitter\.com\/\w+\/status\/\d+)/g;
      const matches = content.match(regex);
      return matches ? matches : [];
    };

    // Function to extract the YouTube video link from the post description
    const extractYouTubeLinks = (content) => {
      const regex = /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&?\n\s<]+)/g;
      const matches = content.match(regex);
      return matches ? matches : [];
    };

    // Function to extract the Instagram post link from the post description
    const extractInstagramLinks = (content) => {
      const regex = /(https:\/\/www\.instagram\.com\/p\/\w+)/g;
      const matches = content.match(regex);
      return matches ? matches : [];
    };

    // Function to extract the Spotify link from the post description
    const extractSpotifyLinks = (content) => {
      const regex = /(https:\/\/open\.spotify\.com\/\w+\/\w+\S+)/g;
      const matches = content.match(regex);
      return matches ? matches : [];
    };

    // Function to extract the Apple Music link from the post description
    const extractAppleMusicLinks = (content) => {
      const regex = /\/(in\/album\/.*)/g;
      const matches = content.match(regex);
      return matches ? matches : [];
    };

    // Function to replace all occurrences of the tweet link with the TwitterTweetEmbed component
    const replaceTweetLinks = (content) => {
      const regex = /(https:\/\/twitter\.com\/\w+\/status\/\d+)/g;
      return content.replace(regex, (match) => {
        const tweetId = extractTweetId(match);
        return `<TwitterTweetEmbed tweetId="${tweetId}" />`;
      });
    };

    // Function to replace all occurrences of the YouTube link with the YouTube video embed
    const replaceYouTubeLinks = (content) => {
      const regex = /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&?\n\s<]+)/g;
      return content.replace(regex, (match, videoId) => {
        return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      });
    };

    // Function to replace all occurrences of the Instagram link with the Instagram post embed
    const replaceInstagramLinks = (content) => {
      const regex = /(https:\/\/www\.instagram\.com\/p\/\w+)/g;
      return content.replace(regex, (match, postUrl) => {
        return `<blockquote className="instagram-media" data-instgrm-permalink="${postUrl}" data-instgrm-version="13" style={{ background: "#FFF", border: "0", borderRadius: "3px", boxShadow: "0 0 1px 0 rgba(0,0,0,0.5)", display: "block", margin: "1px", maxWidth: "540px", minWidth: "326px", padding: "0", width: "calc(100% - 2px)" }}></blockquote>`;
      });
    };

    // Function to replace all occurrences of the Spotify link with the Spotify embed
    const replaceSpotifyLinks = (content) => {
      const regex = /(https:\/\/open\.spotify\.com\/\w+\/\w+\S+)/g;
      return content.replace(regex, (match, spotifyUrl) => {
        return `<iframe style={{ borderRadius: '12px' }} src="${spotifyUrl}" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
      });
    };

    // Function to replace all occurrences of the Apple Music link with the Apple Music embed
    const replaceAppleMusicLinks = (content) => {
      const regex = /\/(in\/album\/.*)/g;
      return content.replace(regex, (match, albumUrl) => {
        return `<iframe style={{ width: "70%" }} allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/${albumUrl}"></iframe>`;
      });
    };

    // Function to extract the tweet ID from the tweet link
    const extractTweetId = (link) => {
      const regex = /\/(\d+)$/;
      const match = link.match(regex);
      return match ? match[1] : null;
    };

    // Get the tweet links from the post description
    const tweetLinks = extractTweetLinks(htmlContent);
    // Get the YouTube video links from the post description
    const youTubeLinks = extractYouTubeLinks(htmlContent);
    // Get the Instagram post links from the post description
    const instagramLinks = extractInstagramLinks(htmlContent);
    // Get the Spotify links from the post description
    const spotifyLinks = extractSpotifyLinks(htmlContent);
    // Get the Apple Music links from the post description
    const appleMusicLinks = extractAppleMusicLinks(htmlContent);

    let replacedContent = htmlContent;
    tweetLinks.forEach((link) => {
      replacedContent = replacedContent.replace(link, replaceTweetLinks(link));
    });
    youTubeLinks.forEach((link) => {
      replacedContent = replacedContent.replace(link, replaceYouTubeLinks(link));
    });
    instagramLinks.forEach((link) => {
      replacedContent = replacedContent.replace(link, replaceInstagramLinks(link));
    });
    spotifyLinks.forEach((link) => {
      replacedContent = replacedContent.replace(link, replaceSpotifyLinks(link));
    });
    appleMusicLinks.forEach((link) => {
      replacedContent = replacedContent.replace(link, replaceAppleMusicLinks(link));
    });

    replacedContent = replacedContent.replace(/https:\/\/music\.apple\.com/g, '');

    const renderedContent = (
      <div dangerouslySetInnerHTML={{ __html: replacedContent }} />
    );

    return (
      <>
        <Text css={{ fontWeight: '$semibold', fontSize: '$2xl', height: 'max-content' }}>
          {post.title}
        </Text>
        <Image
          src={`https://soundcheck-backend.onrender.com/${post.img.imageUrl}`}
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

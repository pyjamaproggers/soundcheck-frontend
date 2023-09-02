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

export default function Post() {
  const location = useLocation();
  const current = new Date();
  const [month, setMonth] = useState('');
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [post, setPost] = useState(null);
  const id = location.pathname.split("/")[2];

  const setDate = () => {
    const current = new Date();
    const monthNumber = current.getMonth() + 1;
  
    if (monthNumber === 1) {
      setMonth('January');
    } else if (monthNumber === 2) {
      setMonth('February');
    } else if (monthNumber === 3) {
      setMonth('March');
    } else if (monthNumber === 4) {
      setMonth('April');
    } else if (monthNumber === 5) {
      setMonth('May');
    } else if (monthNumber === 6) {
      setMonth('June');
    } else if (monthNumber === 7) {
      setMonth('July');
    } else if (monthNumber === 8) {
      setMonth('August');
    } else if (monthNumber === 9) {
      setMonth('September');
    } else if (monthNumber === 10) {
      setMonth('October');
    } else if (monthNumber === 11) {
      setMonth('November');
    } else if (monthNumber === 12) {
      setMonth('December');
    } else {
      // Handle invalid month number
      setMonth('Unknown');
    }
  };
  

  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://soundcheck-backend.onrender.com/api/posts/${id}`);
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
    var htmlContent = stateToHTML(contentState).trim();


    
    function extractTwitterEmbed()
    {
      console.log(htmlContent)
      var mySubString = htmlContent.substring(
        htmlContent.indexOf(`&lt;blockquote class="twitter-tweet"`), 
        htmlContent.indexOf("&lt;/script&gt;")+15
      );
      var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      htmlContent = htmlContent.replace(mySubString, decodedSubString)

    };
    
    function extractInstagramEmbed(){
      var mySubString = htmlContent.substring(
        htmlContent.indexOf(`&lt;blockquote class="instagram-media"`), 
        htmlContent.indexOf("&lt;/script&gt;")+15
      );
      var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      htmlContent = htmlContent.replace(mySubString, decodedSubString)
  };
    
    function extractYoutubeEmbed(){
      var mySubString = htmlContent.substring(
        htmlContent.indexOf(`&lt;iframe width="560"`), 
        htmlContent.indexOf("allowfullscreen&gt;&lt;/iframe&gt;")+36
      );
      var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      htmlContent = htmlContent.replace(mySubString, decodedSubString)
    };
    
    function extractAppleMusicEmbed(){
      var mySubString = htmlContent.substring(
        htmlContent.indexOf(`&lt;iframe allow="autoplay`), 
        htmlContent.indexOf(`"&gt;&lt;/iframe&gt;`)+21
      );
      var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      htmlContent = htmlContent.replace(mySubString, decodedSubString)
    };
    
    function extractSpotifyEmbeds()
    {
      var mySubString = htmlContent.substring(
        htmlContent.indexOf(`&lt;iframe allow="autoplay`), 
        htmlContent.indexOf(`loading="lazy"&gt;&lt;/iframe&gt;`)+36
      );
      var decodedSubString = mySubString.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      htmlContent = htmlContent.replace(mySubString, decodedSubString)
    };

    extractInstagramEmbed()
    extractTwitterEmbed()
    extractYoutubeEmbed()
    extractAppleMusicEmbed()
    extractSpotifyEmbeds()

    const renderedContent = (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );

    return (
      <>
        <Text css={{ fontWeight: '$semibold', fontSize: '$3xl', height: 'max-content' }}>
          {post.title}
        </Text>
        <Image
          src={`${post.img.imageUrl}`}
          width={500}
          height={400}
          css={{
            width: 'max-content',
            height: 'auto',
            objectFit: 'cover',
            margin: '48px 0px'
          }}
        /><div style={{marginTop:"48px"}}>
        {renderedContent}
        </div>
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

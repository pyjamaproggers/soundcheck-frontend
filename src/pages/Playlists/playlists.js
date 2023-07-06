import React from "react";
import SpotifyPlayer from "react-spotify-player"
import { Col, Grid, Text } from '@nextui-org/react'
import './playlists.css'

export default function Playlists() {

    const SPplaylistsLinks = [
        'https://open.spotify.com/playlist/2BSzF6sRfEKksO30Iv1Hoq?si=c93a139bcbea46f7',
        'https://open.spotify.com/playlist/37i9dQZF1DX2RahGIyQXcJ?si=48ad789c15384dee',
        'https://open.spotify.com/playlist/37i9dQZF1DX1ct2TQrAvRf?si=2d1551b1e08148a1',
        'https://open.spotify.com/playlist/43FJRpUKaBOSWJsbZzOiNo?si=d0b0449b2c814392',
    ]
    // pull all spotify links from the database and set them in a state variable array so it's like the data structure above^

    const AMplaylistsLinks = [
        'https://embed.music.apple.com/in/playlist/2010s-indian-hip-hop-essentials/pl.99742817f93b402395e63e963fb33cd2',
        'https://embed.music.apple.com/in/playlist/top-25-mumbai/pl.db537759ae3341eaa600bc5482209f7c'
    ]
    // pull all apple music links from the database and set them in a state variable array so it's like the data structure above^

    //we'll have to segregate the spotify links form apple music links becuase spotiyf links need to go in the spotiyf player and apple music
    // links need to go in the iframe, so we'll need to arrays

    const size = {
        width: '100%',
        height: 450,
    };

    return (
        <>
            <div className="home">
                <Grid.Container
                    css={{
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
                            Curated Music Playlists
                        </Text>
                        <Text css={{
                            width: '100vw',
                            fontWeight: '$semibold',
                            '@xsMax': {
                                fontSize: '$sm',
                            },
                            '@xsMin': {
                                fontSize: '$lg',
                            },
                            textAlign: 'center',
                            margin: '6px 0px 0px 0px'
                        }}>
                            Just for you.
                        </Text>
                    </Col>
                    {SPplaylistsLinks.map((playlist, index) => (
                        <Grid css={{
                            m: '24px',
                            '@xsMax': {
                                width: 300
                            },
                            '@xsMin': {
                                width: 600
                            }
                        }} key={index}>
                            <SpotifyPlayer
                                uri={playlist}
                                size={size}
                                view="list"
                                theme="black"
                            />
                        </Grid>
                    ))}
                    {AMplaylistsLinks.map((playlist, index) => (
                        <Grid css={{
                            m: '24px',
                            '@xsMax': {
                                width: 300
                            },
                            '@xsMin': {
                                width: 600
                            }
                        }} key={index}>
                            <iframe 
                            allow="autoplay *; encrypted-media *;" 
                            frameborder="0" 
                            height="450" 
                            style={{width:'100%',maxWidth:'660px',overflow:'hidden',background:'transparent'}}
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                            src={playlist}></iframe>
                        </Grid>
                    ))}

                </Grid.Container>
            </div>
        </>
    )
}
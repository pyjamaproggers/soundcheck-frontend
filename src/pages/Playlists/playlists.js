import React, {useState, useEffect} from "react";
import SpotifyPlayer from "react-spotify-player"
import { Col, Grid, Text, Loading } from '@nextui-org/react'
import './playlists.css'

export default function Playlists() {
    const [fetching, setFetching] = useState(true)
    const [spotifyLinks, setSpotifyLinks] = useState()
    const [appleMusicLinks, setAppleMusicLinks] = useState()

    const playlists = [
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/2BSzF6sRfEKksO30Iv1Hoq?si=c93a139bcbea46f7',
        },
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX2RahGIyQXcJ?si=48ad789c15384dee',
        },
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/37i9dQZF1DX1ct2TQrAvRf?si=2d1551b1e08148a1',
        },
        {
            platform: 'Spotify',
            link: 'https://open.spotify.com/playlist/43FJRpUKaBOSWJsbZzOiNo?si=d0b0449b2c814392',
        },
        {
            platform: 'AppleMusic',
            link: 'https://embed.music.apple.com/in/playlist/2010s-indian-hip-hop-essentials/pl.99742817f93b402395e63e963fb33cd2',
        },
        {
            platform: 'AppleMusic',
            link: 'https://embed.music.apple.com/in/playlist/top-25-mumbai/pl.db537759ae3341eaa600bc5482209f7c',
        },

    ]
    // pull all playlists links from the database and segregate the ones uploaded by the current logged in user into a state varible array
    // so that it likes like the array above


    const SegregatePlaylists = () => {
        var spotify = []
        var applemusic = []
        var i
        for (i = 0; i < playlists.length; i++) {
            if (playlists[i].platform == 'Spotify') {
                spotify.push(playlists[i])
            }
            else {
                applemusic.push(playlists[i])
            }
        }
        setSpotifyLinks(spotify)
        setAppleMusicLinks(applemusic)
    }

    const size = {
        width: '100%',
        height: 450,
    };

    useEffect(() => {
        //fetch all posts on load
        setFetching(true)
        //segregate posts into drafts and non-drafts
        window.setTimeout(() => {
            SegregatePlaylists()
            setFetching(false)
        }, 2000) //i've put this in a timeout because in a useffect the code was being executed before the spotify scripts were being loaded 
        // into the html headers, i dont think we'll have to put this into timeout because you'll be pulling the data from mongodb which is 
        //bound to take longer than spotify headers loading
    }, [])

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
                                paddingBottom: '24px'
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
                    {fetching &&
                        <Loading css={{padding: '30vh 0px'}} color={'white'} size="xl"/>
                    }

                    {spotifyLinks && !fetching &&
                    <>
                        {spotifyLinks.map((playlist, index) => (
                            <Grid css={{
                                
                                '@xsMax': {
                                    width: 300,
                                    m: '48px 24px'
                                },
                                '@xsMin': {
                                    width: 300,
                                    m: '24px',
                                }
                            }} key={index}>
                                <SpotifyPlayer
                                    uri={playlist.link}
                                    size={size}
                                    view="list"
                                    theme="black"
                                />
                            </Grid>
                        ))}
                    </>
                    }


                    {appleMusicLinks && !fetching &&
                    <>
                        {appleMusicLinks.map((playlist, index) => (
                            <Grid css={{
                                
                                '@xsMax': {
                                    width: 300,
                                    m: '48px 24px'
                                },
                                '@xsMin': {
                                    width: 300,
                                    m: '24px',
                                }
                            }} key={index}>
                                <iframe 
                                allow="autoplay *; encrypted-media *;" 
                                frameborder="0" 
                                height="450" 
                                title={index}
                                style={{width:'100%',maxWidth:'660px',overflow:'hidden',background:'transparent'}}
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                                src={playlist.link}></iframe>
                            </Grid>
                        ))}
                    </>
                    }


                </Grid.Container>
            </div>
        </>
    )
}
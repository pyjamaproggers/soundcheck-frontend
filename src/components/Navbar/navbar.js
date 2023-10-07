import React from "react";
import './navbar.css'
import { Navbar, Link, Image, Text, Grid, } from "@nextui-org/react";
import { FaYoutube, FaInstagram, FaTwitter, FaDiscord, FaSpotify, } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
import Logo from '../../assets/logo.jpeg'
import '@fontsource/roboto';

function Header() {

    const items = [
        { name: 'Home', href: '/' },
        { name: 'News', href: '/news' },
        { name: 'Playlists', href: '/playlists' },
    ]

    const collapsedItems = [
        { name: 'Home', href: '/' },
        { name: 'News', href: '/news' },
        { name: 'Playlists', href: '/playlists' },
    ]

    var active = window.location.pathname

    return (
        <>
            <Navbar className="navbar" variant="static">
                <Navbar.Toggle color="inherit" showIn="xs" />
                <Navbar.Brand hideIn="xs">
                    <Image css={{
                        width: '200px',
                        height: '76px',
                        borderRadius: '5px',
                        left: 0,
                        overflow: 'hidden',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }} src={Logo}
                        onClick={() => {
                            window.location.pathname = ''
                        }} />
                </Navbar.Brand>

                {/* <Navbar.Content hideIn={'xs'} css={{ w: '10%', }}>
                </Navbar.Content> */}

                <Navbar.Content hideIn="xs" variant="highlight" >
                    {items.map((item, index) => (
                        <Navbar.Link key={index} isActive={item.href === active.substring(0, item.href.length + 1)} href={item.href} css={{fontFamily:"Roboto"}}>
                            {item.name}
                        </Navbar.Link>
                    ))}

                </Navbar.Content>

                <Navbar.Content showIn={'xs'}>
                    <Image css={{
                        width: '200px',
                        height: '66px'
                    }} src={Logo} />
                </Navbar.Content>

                <Navbar.Content showIn={'xs'} css={{
                    width: '30px'
                }}>
                </Navbar.Content>

                <Navbar.Content hideIn={'xs'}>
                    <Navbar.Item target="_blank" href="https://open.spotify.com/user/31ahbs772sa3yvxr4lxmogsab64i?si=7cdfb2397a3940bd&nd=1">
                        <FaSpotify
                            // className="d-icon" 
                            size={'20px'} onClick={() => { window.location = "https://open.spotify.com/user/31ahbs772sa3yvxr4lxmogsab64i?si=7cdfb2397a3940bd&nd=1" }} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/soundcheckindia_/">
                        <FaInstagram onClick={() => { window.location = "https://www.instagram.com/soundcheckindia_/" }}
                            // className="ig-icon" 
                            size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://twitter.com/SoundCheckIndia">
                        <FaTwitter onClick={() => { window.location = "https://twitter.com/SoundCheckIndia" }}
                            // className="t-icon" 
                            size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://music.apple.com/profile/SoundCheckIndia">
                        <SiApplemusic onClick={() => { window.location = "https://music.apple.com/profile/SoundCheckIndia" }}
                            // className="yt-icon"  
                            size={'20px'} />
                    </Navbar.Item>
                </Navbar.Content>

                <Navbar.Collapse showIn={"xs"}>
                    {collapsedItems.map((item, index) => (
                        <Navbar.CollapseItem key={index} isActive={item.href === active.substring(0, item.href.length + 1)}>
                            <Link href={item.href}
                                css={{
                                    minWidth: "100%",
                                    fontFamily:"Roboto"
                                }}
                            >
                                {item.name}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;
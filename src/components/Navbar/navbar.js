import React from "react";
import './navbar.css'
import { Navbar, Link, Image, Text, Grid, } from "@nextui-org/react";
import { FaYoutube, FaInstagram, FaTwitter, FaDiscord, FaSpotify, } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
import Logo from '../../assets/logo.jpeg'

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
                        width: '152px',
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
                        <Navbar.Link key={index} isActive={item.href === active.substring(0, item.href.length + 1)} href={item.href}>
                            {item.name}
                        </Navbar.Link>
                    ))}

                </Navbar.Content>

                <Navbar.Content showIn={'xs'}>
                    <Image css={{
                        width: '152px',
                        height: '66px'
                    }} src={Logo} />
                </Navbar.Content>

                <Navbar.Content showIn={'xs'} css={{
                    width: '30px'
                }}>
                </Navbar.Content>

                <Navbar.Content hideIn={'xs'}>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <FaSpotify
                            // className="d-icon" 
                            size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <FaInstagram
                            // className="ig-icon" 
                            size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <FaTwitter
                            // className="t-icon" 
                            size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <SiApplemusic
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
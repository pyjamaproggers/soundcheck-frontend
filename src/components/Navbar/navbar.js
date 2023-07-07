import React from "react";
import './navbar.css'
import { Navbar, Link, Image, Text, Grid, } from "@nextui-org/react";
import { FaYoutube, FaInstagram, FaTwitter, FaDiscord} from 'react-icons/fa';
import Logo from '../../assets/TempLogo.jpeg'

function Header() {

    const items = [
        { name: 'Home', href: '/' },
        { name: 'News', href: '/news' },
        { name: 'Playlists', href: '/playlists' },
    ]

    const collapsedItems = [
        { name: 'Home', href: '/' },
        { name: 'Articles', href: '/blogspage' },
        { name: 'Playlists', href: '/playlists' },
        { name: 'Contact Us', href: '/contactus' },
        { name: 'Login', href: '/login' },
    ]

    var active = window.location.pathname

    return (
        <>
            <Grid.Container css={{
                width: 'auto',
                height: '66px',
                margin: '0px 24px',
                borderStyle: 'solid',
                borderWidth: '4px 0px 0px 0px',
                borderColor: '#44041A',
            }}>
                <Text css={{
                    fontWeight: '$semibold',
                    alignSelf: 'center',
                    '@xsMin': {
                        fontSize: '$3xl',
                    },
                    '@xsMax': {
                        fontSize: '$2xl'
                    }
                }}>
                    SoundCheck™ India
                </Text>
            </Grid.Container>
            <Navbar className="navbar" variant="sticky">
                <Navbar.Toggle color="inherit" showIn="xs" />
                <Navbar.Brand hideIn="xs">
                    <Image css={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '5px',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }} src={Logo}
                        onClick={() => {
                            window.location.pathname = ''
                        }} />
                </Navbar.Brand>
                <Navbar.Content hideIn={'xs'} css={{ w: '30px', }}>
                </Navbar.Content>
                <Navbar.Content hideIn={'xs'} css={{ w: '0px', }}>
                </Navbar.Content>
                <Navbar.Content hideIn="xs" variant="highlight" >
                    {items.map((item, index) => (
                        <Navbar.Link key={index} isActive={item.href === active.substring(0, item.href.length + 1)} href={item.href}>
                            {item.name}
                        </Navbar.Link>
                    ))}

                </Navbar.Content>
                <Navbar.Content hideIn={'xs'} css={{ w: '0px', }}>
                </Navbar.Content>
                <Navbar.Content showIn={'xs'}>
                    <Image css={{
                        width: '40px',
                        height: '40px'
                    }} src={Logo} />
                </Navbar.Content>
                <Navbar.Content hideIn={'xs'}>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <FaDiscord className="d-icon" size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <FaInstagram className="ig-icon" size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <FaYoutube className="yt-icon" size={'20px'} />
                    </Navbar.Item>
                    <Navbar.Item target="_blank" href="https://www.instagram.com/apl.ashoka/">
                        <FaTwitter className="t-icon" size={'20px'} />
                    </Navbar.Item>
                </Navbar.Content>

                <Navbar.Content showIn={'xs'} css={{ w: '30px', }}>
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
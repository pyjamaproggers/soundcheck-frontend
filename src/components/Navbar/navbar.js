import React from "react";
import './navbar.css'
import { Navbar, Link, Image, Button, Text, } from "@nextui-org/react";
import {FaYoutube,FaFacebookF,FaInstagram,FaTwitter,} from 'react-icons/fa';
import Logo from '../../assets/TempLogo.jpeg'

function Header() {

    const items = [
        { name: 'Home', href: '/' },
        { name: 'Articles', href: '/blogspage' },
        { name: 'Contact Us', href: '/contactus' },
    ]

    const collapsedItems = [
        { name: 'Home', href: '/' },
        { name: 'Articles', href: '/blogspage' },
        { name: 'Contact Us', href: '/contactus' },
        { name: 'Login', href: '/login' },
    ]

    var active = window.location.pathname

    return (
        <Navbar className="navbar" variant="sticky" shouldHideOnScroll >
            <Navbar.Toggle color="inherit" showIn="sm" />
            <Navbar.Brand hideIn="sm">
                <Image css={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '5px'
                }} src={Logo}
                    onClick={() => {
                        window.location.pathname = ''
                    }} />
            </Navbar.Brand>
            <Navbar.Content hideIn="sm" variant="underline-rounded" >
                {items.map((item, index) => (
                    <Navbar.Link key={index} isActive={item.href === active.substring(0, item.href.length + 1)} href={item.href}>
                        {item.name}
                    </Navbar.Link>
                ))}

            </Navbar.Content>
            <Navbar.Content showIn={'sm'}>
                <Image css={{
                    width: '40px',
                    height: '40px'
                }} src={Logo} />
            </Navbar.Content>
            <Navbar.Content hideIn={'sm'}>
                {/* <Link target="_blank" href="https://www.instagram.com/apl.ashoka/">
            <FaInstagram className="instagram-logo" size={'25px'} />
          </Link> */}
                <Button auto flat color="error">
                    <Text css={{
                        fontWeight: 600,
                    }}>
                        LOGIN
                    </Text>
                </Button>
            </Navbar.Content>
            <Navbar.Content showIn={'sm'} css={{w: '30px',}}>

            </Navbar.Content>


            <Navbar.Collapse showIn={"sm"}>
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
    )
}

export default Header;
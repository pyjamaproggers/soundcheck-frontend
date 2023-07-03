import { Grid, Text, Col, Input, Button } from "@nextui-org/react";
import React, { useState } from "react";
import WritePost from "../Post/writePost";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [usernameStatus, setUsernameStatus] = useState('')
    const [passwordStatus, setPasswordStatus] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const navigate = useNavigate()

    const Database = [
        {
            username: 'dj123',
            password: 'dj123'
        },
    ]

    const checkCredentials = () => {
        if(username.length!=0 && password.length!=0){
            Database.map((user)=>{
                if(username==user.username){
                    if(password==user.password){
                        navigate('/writepost',{state:{loggedIn: true}})
                    }
                    else{
                        setLoggedIn(false)
                        setPasswordStatus('error')
                    }
                }
                else{
                    setLoggedIn(false)
                    setUsernameStatus('error')
                }
            })
        }
        if(username.length==0){
            setUsernameStatus('error')
        }
        if(password.length==0){
            setPasswordStatus('error')
        }
    }
    return (
        <>
            <Grid.Container
                css={{
                    width: '100vw',
                    height: '90vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Grid css={{
                    backgroundColor: '#262626',
                    padding: '12px',
                    height: 'max-content',
                    width: 'max-content',
                    borderRadius: '8px',
                    flexDirection: 'column'
                }}>
                    <Col css={{
                        width: '300px',
                        height: '100%',
                    }}>
                        <Text
                            css={{
                                color: 'white',
                                fontSize: '$2xl',
                                fontWeight: '$medium',
                                padding: '6px'
                            }}>
                            <span style={{color: '#b81850', fontWeight: '600'}}>SoundCheck</span>™ Login
                        </Text>
                        <Input status={usernameStatus} label="Username" placeholder="dhananjaydhogra123" css={{ width: '100%', p: '4px 0px' }}
                        onChange={(e)=>{
                            setUsername(e.target.value)
                        }}/>
                        <Input.Password status={passwordStatus} label="Password" placeholder="" css={{ width: '100%', p: '4px 0px' }} 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                        <Grid
                            css={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <Button auto flat color='error' css={{
                                backgroundColor: '#300313',
                                mt: '8px'
                            }}
                            onPress={()=>{
                                checkCredentials()
                            }}>
                                <Text css={{
                                    fontWeight: 600,
                                }}>
                                    Login
                                </Text>
                            </Button>
                        </Grid>
                    </Col>
                </Grid>
            </Grid.Container>
            {loggedIn && 
                <Link to={{
                    pathname: '/writepost',
                    state: {loggedIn}
                }}></Link>
            }
        </>
    )
}
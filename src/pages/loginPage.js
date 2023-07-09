import { Grid, Text, Col, Input, Button } from "@nextui-org/react";
import React, { useState } from "react";
import WritePost from "./Post/writePost"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


export default function LoginPage() {
    const [usernameStatus, setUsernameStatus] = useState('')
    const [passwordStatus, setPasswordStatus] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate()

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((previous) => ({ ...previous, [name]: value }));
    };


    const handleSubmit = async (e) => {

        try {
            const res = await login(inputs);
            console.log(res)
            setLoggedIn(true); // Update loggedIn state
            navigate("/dashboard", { state: { loggedIn: true } });
        } catch (err) {
            //   setError(err.response.data);
        }
    };


    // const checkCredentials = () => {
    //     if(username.length!=0 && password.length!=0){
    //         Database.map((user)=>{
    //             if(username==user.username){
    //                 if(password==user.password){
    //                     navigate('/writepost',{state:{loggedIn: true}})
    //                 }
    //                 else{
    //                     setLoggedIn(false)
    //                     setPasswordStatus('error')
    //                 }
    //             }
    //             else{
    //                 setLoggedIn(false)
    //                 setUsernameStatus('error')
    //             }
    //         })
    //     }
    //     if(username.length==0){
    //         setUsernameStatus('error')
    //     }
    //     if(password.length==0){
    //         setPasswordStatus('error')
    //     }
    // }
    return (
        <>
        <div className="home">
            <Grid.Container
                css={{
                    width: '100vw',
                    height: '80vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Grid css={{
                    backgroundColor: 'black',
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
                            <span style={{ color: '#b81850', fontWeight: '600' }}>SoundCheck</span>™ Login
                        </Text>
                        <Input status={usernameStatus} label="Username" placeholder="dhananjaydhogra123" css={{ width: '100%', p: '4px 0px' }} name="username"
                            onChange={(e) => {
                                setUsername(e.target.value)
                                handleChange(e)
                            }} />
                        <Input.Password status={passwordStatus} label="Password" placeholder="" css={{ width: '100%', p: '4px 0px' }} name="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                                handleChange(e)
                            }} />
                        <Grid
                            css={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <Button auto flat color='error' css={{
                                backgroundColor: '#300313',
                                mt: '8px'
                            }}
                                onPress={handleSubmit}>
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
                    state: { loggedIn }
                }}></Link>
            }
        </div>
        </>
    )
}
import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/homePage'
import Login from './pages/LoginPage/loginPage';
import { Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';


function App() {
    const randomInt = Math.floor((Math.random() * 100) + 1);
    return ( 
        <>
        <NextUIProvider>
            <Routes>
                    <Route path='/' component={Home} />
                    <Route path='/login' component={Login} />
            </Routes>
        </NextUIProvider>
        </>
    );
}

export default App;

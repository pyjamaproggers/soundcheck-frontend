import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/homePage'
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Login from './pages/loginPage';
import { Route, Routes } from 'react-router-dom';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import Post from './pages/Post/post';
import WritePost from './pages/Post/writePost';
import Dashboard from './pages/Dashboard/dashboard';
import Playlists from './pages/Playlists/playlists';
import News from './pages/News/news';
import EditPost from './pages/Post/editPost';

function App() {

    const theme = createTheme({
        type: 'dark',
        theme: {
            colors: {
                white: '#ffffff',
                black: '#000000',
            }
        }
    })


    return (
        <>
            <NextUIProvider theme={theme}>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/posts/:id' element={<Post />} />
                    <Route exact path='/writepost' element={<WritePost />} />
                    <Route exact path='/dashboard' element={<Dashboard />} />
                    <Route exact path='/playlists' element={<Playlists />} />
                    <Route exact path='/news' element={<News />} />
                    <Route exact path='/editpost/:id' element={<EditPost />} />
                </Routes>
                <Footer />
            </NextUIProvider>
        </>
    );
}

export default App;

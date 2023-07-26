import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/home/Home'
import Footer from '../components/footer/Footer'
import { GlobalStyles } from '../styles/Global.styles'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import PrivateRouter from './PrivateRouter'
import Detail from '../pages/detail/Detail'
import { AuthProvider } from '../context/AuthContext'
import { ThemeProvider } from '../context/ThemeContext'

const AppRouter = () => {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider>
                <AuthProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/register' element={<Register />} />
                        <Route element={<PrivateRouter />} >
                            <Route path='/about' element={<About />} />
                            <Route path='/detail/:id' element={<Detail />} />
                        </Route>
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </AuthProvider>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default AppRouter
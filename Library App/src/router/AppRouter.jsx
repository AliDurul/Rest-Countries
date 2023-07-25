import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/home/Home'
import Footer from '../components/footer/Footer'
import { GlobalStyles } from '../styles/Global.styles'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

const AppRouter = () => {
    return (
        <>
        <GlobalStyles/>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/register' element={<Register/>} />

                <Route path='/login' element={<Login/>} />
            </Routes>
        <Footer/>
        </>
    )
}

export default AppRouter
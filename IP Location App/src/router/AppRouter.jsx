import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import { Location } from '../pages/Location'
import { Time } from '../pages/Time'
import { Country } from '../pages/Country'
import { More } from '../pages/More'
import { Header } from '../components/Header'
import { Searched } from '../components/Searched'

export const AppRouter = () => {



  return (
    <>
    
    <Header/>
    
    <Routes>
        {/* <Route path='/'  element={<Home/>}/> */}
        <Route index element={<Location />}/>
        <Route path='time' element={<Time/>}/>
        <Route path='country' element={<Country/>}/>
        <Route path='more' element={<More/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      {/* </Route> */}
    </Routes>

    <Searched/>



    </>
  )
}

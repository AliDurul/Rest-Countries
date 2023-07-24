import React, { useContext, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Location } from '../pages/Location'
import { Time } from '../pages/Time'
import { Country } from '../pages/Country'
import { More } from '../pages/More'
import { Header } from '../components/Header'
import { Searched } from '../components/Searched'
import IpContext from '../context/UserIpAddress'

export const AppRouter = () => {

  const {userip,ipres,getData} = useContext(IpContext)
  
 

  const {country} = ipres
console.log(ipres);




  return (
    <>

      <Header />

      <Routes>
        {/* <Route path='/'  element={<Home/>}/> */}
        <Route index element={<Location />} />
        <Route path='time' element={<Time />} />
        <Route path='country' element={<Country />} />
        <Route path='more' element={<More />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* </Route> */}
      </Routes>

      <Searched />


    </>
  )
}

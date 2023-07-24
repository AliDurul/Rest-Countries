import React from 'react'
import { FcSearch } from 'react-icons/fc'
import {AiOutlineWifi} from 'react-icons/ai'
import { NavigationBars } from './NavigationBars'



export const Header = () => {


  return (
    <>

    <div className='container m-auto text-center p-4 search'>

      <div className='text-center  p-5'>
      <h3>With Your IP Address Country Information</h3>

      </div>
      
      <div className='row'>
        
        <div className='col wifiIcon'>
        <AiOutlineWifi 
          size={25}/>
        </div>
          
          
        <div className='col-sm-4'>
          <form action="">

          <input 
          type="text"
          placeholder='Your IP Address'
          required/>

          </form>
          
        </div>
          
        <div className='col btnSearch'>
          <FcSearch 
          size={30}
          type='button'
          />
        </div>
          

      </div>
    </div>


    <NavigationBars/>
    
    </>
  )
}

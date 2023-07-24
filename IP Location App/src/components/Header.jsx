import React, { useContext, useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { AiOutlineWifi } from 'react-icons/ai'
import { NavigationBars } from './NavigationBars'
import IpContext from '../context/UserIpAddress'



export const Header = () => {

  const { setUserip } = useContext(IpContext)

  const [inputdata, setInputdata] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    inputdata && setUserip(inputdata)

  }

  /*   const handleKeyDown = (e) => {
      if ((inputdata !== "") && (e.onKeyDown === 13)) {
        e.preventDefault()
  
        handleSubmit()
      }
    } */




  return (
    <>

      <div className='container m-auto text-center p-4 search'>

        <div className='text-center  p-5'>
          <h3>With Your IP Address Country Information</h3>

        </div>

        <div className='row'>

          <div className='col wifiIcon'>
            <AiOutlineWifi
              size={25} />
          </div>


          <div className='col-sm-4'>
            <form action="">

              <input
                type="text"
                placeholder='Your IP Address'
                required
                onChange={(e) => setInputdata(e.target.value)}
              /*    onKeyDown={handleKeyDown} */
              />

            </form>

          </div>

          <div className='col btnSearch'>
            <FcSearch
              size={30}
              type='button'
              onClick={handleSubmit}
            />
          </div>


        </div>
      </div>


      <NavigationBars />

    </>
  )
}

import React from 'react'
import img from '../assets/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg'
import Login from './Login'


const Authantication = () => {
  return (
    <div>
      <div className='w-full h-[100vh] relative background flex items-center justify-center z-2'>

        <div className='absolute left-0 top-0 bg-black opacity-50 z-1 w-full h-full'></div>

       

         <Login/>

      </div>
    </div>
  )
}

export default Authantication

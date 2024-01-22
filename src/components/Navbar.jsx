import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../../firebase';
import { logoutUser } from '../fueature/slice';
import { signOut } from 'firebase/auth';








const Navbar = () => {
  const user = useSelector((state) => state.data.user.user);
  
  const navigate = useNavigate()
 
  const dispatch = useDispatch()
  const logOut = () =>{
    dispatch(logoutUser())
    signOut(auth)
    
    
  }
  return (
    <div>
      {
        user ? (<>
        
        <div className='flex items-center justify-between w-full h-[100px]'>
        <Link to={"/"}>
        <div><h3 className='text-[#CA3C35] text-[35px]'>NETFLIX</h3></div>
        </Link>
        
        <div className='flex items-center gap-6'>
          <Link to={"/profile"}>
          <div><button className='bg-[trasparent] text-[white]'>Profile</button></div>
          </Link>
         
          <button className='bg-[#CA3C35] w-[100px] h-[40px] text-[20px] text-[white]' onClick={logOut}>Log Out</button>
          
          
        </div>
      </div>
        </>) : (<>
        
          <div className='flex items-center justify-between w-full h-[100px]'>
        <Link to={"/"}>
        <div><h3 className='text-[#CA3C35] text-[35px]'>NETFLIX</h3></div>
        </Link>
        
        <div className='flex items-center gap-6'>
          <Link to={"/Signup"}>
          <button className='bg-[#CA3C35] w-[100px] h-[40px] text-[20px] text-[white]'>Sign Up</button>
          </Link>
          
        </div>
      </div>
        </>)
      }
    </div>
  )
}

export default Navbar

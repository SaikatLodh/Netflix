import React, { useState } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,} from "firebase/auth";
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';




const Signup = () => {

  const [email,setEmail] = useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate()

  const handleSignUp = (e) =>{
e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then(signInWithEmailAndPassword(auth,email,password))
    setDoc(doc(db,"useres",email),{
      favShows : []
    }).catch(err =>{
      alert(err)
    })
    navigate("/")
  }
  

  return (
    <div>
      <div className='w-full h-[100vh] relative background flex items-center justify-center z-2'>
      <div className='absolute left-0 top-0 bg-black opacity-50 z-1 w-full h-full'></div>
      <div className='relative z-10'>

<form action="" className='flex flex-col gap-5' onSubmit={handleSignUp}>
  <input type="email" className='w-[400px] h-[50px] bg-[#393E4B] opacity-80 rounded-sm p-5' placeholder='email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
  <input type="password" className='w-[400px] h-[50px] bg-[#393E4B] opacity-80 rounded-sm p-5' placeholder='password' value={password}  onChange={(e) =>setpassword(e.target.value)}/>
  <button className='w-[400px] h-[50px] bg-[#CA3C35] opacity-100 rounded-sm text-[white]' >Sign Up</button>
</form>

</div>
      </div>
   
     
    </div>
  )
}

export default Signup


import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password).catch(err =>{
      alert(err)
    })

    navigate("/")
  }
  
  return (
    <div>
      <div className='relative z-10'>

        <form action="" className='flex flex-col gap-5' onSubmit={handleLogin} >
          <input type="email" className='w-[400px] h-[50px] bg-[#393E4B] opacity-80 rounded-sm p-5' placeholder='email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
          <input type="password" className='w-[400px] h-[50px] bg-[#393E4B] opacity-80 rounded-sm p-5' placeholder='password' value={password}  onChange={(e) =>setpassword(e.target.value)} />
          <button className='w-[400px] h-[50px] bg-[#CA3C35] opacity-100 rounded-sm text-[white]' >Log In</button>
        </form>

      </div>
    </div>
  )
}

export default Login

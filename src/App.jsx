import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Authantication from './components/Authantication'
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../firebase'
import { loginUser,setLoading } from './fueature/slice'
import Loding from './components/Loding'
import Profile from './components/Profile'
import ProtextedRoute from './components/ProtectedRoute'
import Video from './components/Video'








function App() {
  const [count, setCount] = useState(0)
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data.user.user);
  

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>


{

isLoading ? (<>
  <Route path="/" element={<Loding/>} />
 
 </>) : 
 
 (<>
 {user ?   <Route path="/" element={<Home/>}/> :    <Route path="/" element={<Authantication/>}/> }
 
 </>) 
  }
    
   
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/profile" element={<ProtextedRoute><Profile/></ProtextedRoute>}/>
      <Route path="/video" element={<Video/>}/>



     </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import img from '../assets/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg'
import { createImage } from '../service/Api'
import { CiBookmarkRemove } from "react-icons/ci";




const Profile = () => {
  const [movies , setMovies] = useState([]);
  const user = useSelector((state) => state.data.user.user);
  const currentUser = user.email

  useEffect(() =>{
    try {
      if(user){

        onSnapshot(doc(db,"useres",`${currentUser}`),(doc) =>{
          if(doc.data()){
            setMovies(doc.data().favShows)
          } 
        })
  }
    } catch (error) {
      console.log(error)
    }


  },[currentUser])


const removeItems = async  (movie) =>{
const userDoc = doc(db,"useres",`${currentUser}`)
await updateDoc(userDoc,{
  favShows : arrayRemove(movie)
})
  }

  

  

  console.log(movies)
  return (
    <div>
      <div>
      <div className='relative z-2 w-full h-[700px]'>
     <div className='absolute left-0 top-0 bg-black opacity-50 z-1 w-full h-full'></div>
     <div className='absolute left-10 top-[30%]'>
      <h2 className='text-[white] text-[70px] pb-6'>
        User Details
      </h2>
    <div> <h6 className='text-[white] text-[25px] flex items-center gap-3'> Email: <span className='text-[20px]'>{user.email}</span></h6></div> 
     </div>
      <img src={img} alt="" className='w-full h-full object-cover' />
     </div>
      </div>
<div >

  <h2 className='text-[white] text-[40px] pt-20 pb-5'>Favorite List</h2>
  <div className='flex items-center gap-[23px] flex-wrap relative z-2'>

  

  {
        movies.map((movie) =>(
           <>
           
           <div className='w-[24%]  overflow-hidden relative z-2' key={movie.key}> 

          
           
           <div className='absolute left-0 top-0 bg-zinc-900 opacity-0 z-1 w-full h-full hover:opacity-70 transition-all cursor-pointer flex items-center justify-center'>
              <h3 className='relative z-99 text-[white]'> {movie.title}</h3>
              <div className='icon' onClick={() => removeItems(movie)}><CiBookmarkRemove/></div>
              
               </div>

              
           <img src={createImage(movie.backdrop_path ?? movie.poster_path,"w500")} alt={movie.title} className='w-full object-cover'/>
           </div>

          </>
            
            
        ))
      }
  </div>


</div>
      
     
      
     
    </div>
  )
}

export default Profile

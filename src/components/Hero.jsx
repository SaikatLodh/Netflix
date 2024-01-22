import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints, { createImage } from '../service/Api'



const Hero = () => {
    const [movie,setMovie] = useState({})

    useEffect(() =>{
        axios.get(endpoints.popular).then((respon) =>{
            console.log(respon.data.results)
         const movies = respon.data.results;
         const moviesRandom = movies[Math.floor(Math.random() * movies.length)] ;
         setMovie(moviesRandom)
        })
    },[])

    if(!movie){
        <>
        <p>Fetching movie.....</p>
        </>
    }

    const {title,backdrop_path,release_date,overview} = movie
  return (
    <>
     <div className='relative z-2'>
      <div className='absolute left-0 top-0 bg-zinc-900 opacity-70 z-1 w-full h-full'></div>
        <div className='w-[100%] h-[600px] '>

        <img src={createImage(backdrop_path,"original")} alt={title} className='w-full h-full object-cover object-top'/>
        </div>

        <div className='absolute bottom-[22%] left-10'>

          <div> <h1 className='text-[white] text-[80px] w-[60%]'>{title}</h1></div> 

            <div className='flex items-center gap-6 pb-[30px]'>
                <button className='bg-[white] text-[black] text-[20px] w-[100px] h-[50px]'>Play</button>
                <button className='border border-[white] w-[100px] h-[50px] text-[white]'>Watch Later</button>
            </div>

            <div><h6 className='text-[white] text-[20px] pb-[20px]'>{release_date}</h6></div>
            <div><p className='text-[white] text-[22px] w-[60%]'>{overview}</p></div>
        </div>
     
    </div>
    </>
   
  )
}

export default Hero

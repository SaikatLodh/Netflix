import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieItem from './movieItem'
import Video from './Video'








const MovieRow = ({title,url}) => {
    const [movies , setMovies] = useState([])
    
   
    const baseUrl = "https://api.themoviedb.org/3/"
   

    useEffect(() =>{
        axios.get(url).then((respon) =>{
            setMovies(respon.data.results)
        })
    },[url])


    

  return (
    <div className='relative'>
      <h2 className='text-[white] text-[40px] pt-20'>{title}</h2>
      <div className='flex items-center justify-between flex-wrap'>
      {
        movies.map((movie,key) =>(
           <>
         
           <div className='w-[24%] h-[250px] relative overflow-hidden mt-5'> <MovieItem key={key.id} movie={movie} /> </div>
           
           
          </>
            
            
        ))
        
      }
      
      </div>
    
    
    </div>
  )
}

export default MovieRow

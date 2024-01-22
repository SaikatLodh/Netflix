import React, { useState } from 'react'
import { createImage } from '../service/Api'
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { setlike } from '../fueature/slice';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';












const MovieItem = ({ movie }) => {
    const { backdrop_path, title, poster_path } = movie
    const [like, setLike] = useState(false)
    const user = useSelector((state) => state.data.user.user);
    const [trailerUrl,setTrailerUrl] = useState("")
 


    const LikeMovie = async () => {
        const currentUser = user?.email

        if (currentUser) {
            const userDoc = doc(db, "useres", currentUser);
            setLike(!like)
            await updateDoc(userDoc, {
                favShows: arrayUnion({ ...movie })
            })
        } else {
            alert("Something went wrong")
        }
}


const opts = {
    height: "100%",
    width: "100%",
    playerVars:{
        
    autoplay:1
    }
}

const handelClick = (movie) =>{
if(trailerUrl){
setTrailerUrl("")
}else{
movieTrailer(movie?.title || "")
.then((url) =>{
    const urlParams = new URLSearchParams(new URL(url).search)
    setTrailerUrl(urlParams.get('v'))  
})
.catch((error) =>{
 alert(error)
})
}


}

    return (
<>
{ trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

<div className='relative z-2' onClick={() => handelClick(movie)}>

            <div className='absolute left-0 top-0 bg-zinc-900 opacity-0 z-1 w-full h-full hover:opacity-70 transition-all cursor-pointer flex items-center justify-center'>
          
                <h3 className='relative z-99 text-[white]'> {title}</h3>
                <div onClick={LikeMovie}>

                    {

                        like ? (<>
                            <div className='icon'> <IoHeart /></div>


                        </>) : (<>
                            <div className='icon'><CiHeart /></div>


                        </>)

                    }</div>
            </div>

            
           <div>

           <img src={createImage(backdrop_path ?? poster_path, 'w500')} alt="" className='object-cover object-top w-[100%] h-[100%] ' />
           
           </div>
           
          
            
            
        </div>

    

        

</>


       

        

        
    )
}

export default MovieItem

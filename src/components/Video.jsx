import React, { useEffect, useState } from 'react'
import movieTrailer from 'movie-trailer';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';


const Video = ({movie}) => {
    
    const [trailerUrl, setTrailerUrl] = useState("")
    const baseUrl = "https://api.themoviedb.org/3/"

    const opts = {
        height: "100%",
        width: "100%",
        playerVars: {

            autoplay: 1
        }
    }

    

    useEffect((movie) =>{
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },[])
  return (
    <div>
       { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Video

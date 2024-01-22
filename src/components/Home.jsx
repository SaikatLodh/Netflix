import React from 'react'
import Hero from './Hero'
import MovieRow from './MovieRow'
import endpoints from '../service/Api'




const Home = () => {
  return (
    <div>
      <Hero/>
      <MovieRow title="Upcoming" url={endpoints.upcoming}/>
      <MovieRow title="Trending" url={endpoints.trending}/>
      <MovieRow title="Top Rated" url={endpoints.topRated}/>
      <MovieRow title="Comedy" url={endpoints.comedy}/>
      <MovieRow title="Popular" url={endpoints.popular}/>
    </div>
  )
}

export default Home

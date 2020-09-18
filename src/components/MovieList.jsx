import React from 'react'
import movies from '../data'
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render(){
    return (
      <div>
      {movies.map((movie,index) =>
       <MovieCard key={index} title={movie.title} subtitle={movie.subtitle} storyline={movie.storyline} rating={movie.rating} imagePath={movie.imagePath}/>)
      }
      </div>
    )
    }
}

export default MovieList

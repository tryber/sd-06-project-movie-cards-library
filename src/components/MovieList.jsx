import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    return (
      <section className='movie-list'>
      {this.props.movies.map((movie, index) => {
        return <MovieCard key={movie.title} movie={movie}/>
      })}
      </section>
    )
  }
}

export default MovieList;
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor() {
    super() 

    
  }

  render() {
    const { movies } = this.props;
    return (
      movies.map((eachMovie) => {
        return <MovieCard movie={eachMovie} key={eachMovie.title}/>
      })
    )
  }
}

export default MovieList;
// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render () {
    const films = this.props.movies;
    return (
      <div>
        {(films.map((movie) => {
          <MovieCard movie={movie} />
        }))}
      </div>
    );
  }
}
export default MovieList;

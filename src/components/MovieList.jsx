// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movieList = movies.map((movie) => <MovieCard movie={movie} key={movie.title}/>);
    return (
      <ul>
        {movieList}
      </ul>
    );
  }
}

export default MovieList;

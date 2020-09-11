// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesList = movies.map((movie) => {
      return (
        <li key = {movie.name}>
          <MovieCard />
        </li>
      );
    });
    return <div>{moviesList}</div>;
  }
}

export default MovieList;

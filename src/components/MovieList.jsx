// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesList = movies.map((movie) => {
      return(
        <MovieCard />
      );
    });
  return <div>{moviesList}</div>
  }
}

export default MovieList;

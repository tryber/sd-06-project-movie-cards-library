import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((eachMovie) => <MovieCard key={eachMovie} />)
    );
  }
}

export default MovieList;

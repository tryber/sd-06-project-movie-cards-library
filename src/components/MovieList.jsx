import React from 'react';
import Proptypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    return (
      <div className="movies">
        {this.props.movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}
export default MovieList;

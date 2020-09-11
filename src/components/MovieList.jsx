import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              key={movie.title}
            />
          );
        })}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
export default MovieList;

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((eachMovie) => <MovieCard movie={eachMovie} key={eachMovie.title} />)
    );
  }
}

MovieList.propTypes = { movies: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default MovieList;

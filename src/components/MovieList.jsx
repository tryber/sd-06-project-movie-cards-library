import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map(eachMovie => {
        return <MovieCard movie={eachMovie} key={eachMovie.title} />;
      })
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.object,
}

export default MovieList;

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import movies from '../data';
// NAO PRECISO DESSE MOVIES NÉ??

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map(movie => <MovieCard movie={movie} key={movie.title} />)};
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;

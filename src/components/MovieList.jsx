import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((eachMovie) => (<MovieCard key={eachMovie.title} movie={eachMovie} />),
        )}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
MovieList.defaultProps = { movie: {} };

export default MovieList;

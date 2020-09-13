import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((eachMovie) => <MovieCard key={eachMovie.title} movies={eachMovie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape([{
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }]).isRequired,
};

export default MovieList;

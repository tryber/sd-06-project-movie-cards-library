import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movieInfo = this.props.movies;
    return (<div className="movie-list">
      {movieInfo.map((movie) =>
        <MovieCard key={movie.title} movie={movie} />,
      )}
    </div>
    );
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
MovieList.defaultProps = { movies: [] };
// solução para o erro apontado pelo codeclimate
// (propType [name] is not required, but has no corresponding defaultProp declaration.)
// encontrada no StackOverflow:
// [https://stackoverflow.com/questions/52332394/if-a-proptype-isnt-required-why-eslint-want-to-provide-default-prop-for-it]

export default MovieList;

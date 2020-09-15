// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };
export default MovieList;

// REFERENCIAS
// https://pt-br.reactjs.org/
// https://app.rocketseat.com.br/
// https://scrimba.com/
// https://stackoverflow.com/

// GITHUB = ANDERSONS STUBER, PAULO LINS
// https://github.com/HugoDF/jest-spy-mock-stub-reference

// YOUTUBE = "TANTAUM" DE CANAL

// AGRADECIMENTOS ESPECIAIS: AND E PAULO LINS.

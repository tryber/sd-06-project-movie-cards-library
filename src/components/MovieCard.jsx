// import { render } from 'enzyme';
// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// import MovieList from './MovieList.jsx';

class MovieCard extends React.Component {
  render() {
    // const films = this.props.movies;
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.storyline}</h5>
        <p>{movie.subtitle}</p>
        <Rating rating={movie.rating} />
      </section>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({}).isRequired };

export default MovieCard;

// REFERENCIAS
// https://pt-br.reactjs.org/
// https://app.rocketseat.com.br/
// https://scrimba.com/
// https://stackoverflow.com/

// GITHUB = ANDERSONS STUBER, PAULO LINS
// https://github.com/HugoDF/jest-spy-mock-stub-reference

// YOUTUBE = "TANTAUM" DE CANAL

// AGRADECIMENTOS ESPECIAIS: AND E PAULO LINS.

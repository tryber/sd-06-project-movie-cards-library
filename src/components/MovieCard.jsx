import React, { Component } from 'react';
import movieType from '../Types';
// import movie from './MovieList'

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <section className="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        {movie.rating}
      </section>
    );
  }
}

MovieCard.propTypes = movieType;

export default MovieCard;

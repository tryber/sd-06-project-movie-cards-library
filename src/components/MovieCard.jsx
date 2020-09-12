import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movieType from '../Types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    // const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <section className="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
      </section>
    );
  }
}

MovieCard.propTypes = PropTypes.shape(movieType).isRequired;

export default MovieCard;

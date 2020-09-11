import React, { Component } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card">
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object
}

export default MovieCard;

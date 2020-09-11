import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';


class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movieCard">
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <img src={movie.imagePath} alt={movie.title} />
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };
export default MovieCard;

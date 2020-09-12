import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img
            src={imagePath}
            alt={title}
            className="movie-card-image"
          />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={rating} /></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf.isRequired,
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;

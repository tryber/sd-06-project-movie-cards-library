import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';


class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-image">
          <img src={movie.imagePath} alt={movie.title} />
        </div>
        <div className="movie-card-body">
          <div className="movie-card-title">
            <h4>{movie.title}</h4>
          </div>
          <div className="movie-card-subtitle">
            <h5>{movie.subtitle}</h5>
          </div>
          <div className="movie-card-storyline">
            <p>{movie.storyline}</p>
          </div>
          <Rating rating={movie.rating} />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };

export default MovieCard;

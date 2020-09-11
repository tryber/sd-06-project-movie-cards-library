import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <div className="movie-card-image">
            <img src={movie.imagePath} alt={`Movie: ${movie.title}`} />
          </div>
          <br />
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <Rating className="movie-card-rating" rating={movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };

export default MovieCard;

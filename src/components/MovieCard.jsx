import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card-wrap">
        <div>
          <img src={movie.imagePath} alt={movie.title} />
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
        </div>
        <div>
          <Rating rating={movie.rating} />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf.isRequired };

export default MovieCard;

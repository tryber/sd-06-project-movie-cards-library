import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (<div className="movie-card">
      <div>
        <img src={imagePath} className="movie-card-image" alt={title} />
      </div>
      <div>
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
      <div>
        <Rating className="rating" rating={rating} />
      </div>
    </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;

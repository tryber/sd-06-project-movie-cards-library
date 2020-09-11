import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { imagem, title, subtitle, description, rating } = this.props;
    return (<div className="movie-card">
      <div>
        <img src={imagem} className="movie-card-image" alt={title} />
      </div>
      <div>
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{description}</p>
      </div>
      <div className="movie-card-rating">
        <Rating className="rating" rating={rating} />
      </div>
    </div>);
  }
}

MovieCard.propTypes = {
  imagem: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;

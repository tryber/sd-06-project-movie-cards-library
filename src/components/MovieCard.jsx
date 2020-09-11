import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { url, title, subtitle, synopsis, rating } = this.props;

    return (
      <div className="movie-card">
        <img src={url} alt={title} className="movie-card-image"/>
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{synopsis}</p>
        <div className="movie-card-rating"><Rating rating={rating}/></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;

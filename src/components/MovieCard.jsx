import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;

    return (
      <div className="movie-card movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <img className="movie-card-image" src={imagePath} alt="" />
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.defaultProps = { movie: {} };
MovieCard.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
};

export default MovieCard;

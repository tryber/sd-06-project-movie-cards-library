import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <div className="movie-card">
          <img className="movie-card-image" src={imagePath} alt={`${title} pic`} />
          <div className="movie-card-body">
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

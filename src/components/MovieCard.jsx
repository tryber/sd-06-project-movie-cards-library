import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img src={imagePath} alt={title} className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating
          rating={rating}
        />
      </div>
    );
  }

}


MovieCard.defaultProps = {
  title: 'title',
  subtitle: 'subtitle',
  storyline: 'storyline',
  rating: 'rating',
  imagePath: 'imagePath',
  movie: {
    title: 'title',
    subtitle: 'subtitle',
    storyline: 'storyline',
    rating: 'rating',
    imagePath: 'image',
  },
};

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

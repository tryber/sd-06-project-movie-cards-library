import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="card">
        <img src={imagePath} alt={title} className="cover-images" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.defaulProps = {
  movie: {},
  title: 'title',
  subtitle: 'subtitle',
  storyline: 'storyline',
  imagePath: 'imagePath',
  rating: 'rating',
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default MovieCard;

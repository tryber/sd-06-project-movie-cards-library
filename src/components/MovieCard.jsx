import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyLine, imagePath, rating } = this.props;
    return (
      <div>
        <img src={imagePath} alt={title} />
        <h4>{`${title}`}</h4>
        <h5>{`${subtitle}`}</h5>
        <p>{`${storyLine}`}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyLine: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
};

MovieCard.defaultProps = {
  title: 'Movie Title 1',
  subtitle: 'Movie Subtitle 1',
  storyLine: 'Movie Storyline 1',
  imagePath: 'images/movie_1',
  rating: 4.5,
};

export default MovieCard;

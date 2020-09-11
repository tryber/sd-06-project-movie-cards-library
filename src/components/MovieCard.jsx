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
  title: 'Untitled',
  subtitle: 'Untitled',
  storyLine: 'No Story found',
  imagePath: '',
  rating: 0,
};

export default MovieCard;

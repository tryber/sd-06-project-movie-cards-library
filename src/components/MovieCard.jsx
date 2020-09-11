import React, { Component } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyLine, imagePath, rating } = this.props;
    return (
      <div>
        <img src={imagePath} alt=""></img>
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
}

export default MovieCard;

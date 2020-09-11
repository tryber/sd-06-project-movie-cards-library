import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;

    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt="" />
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.defaultProps = { movie: {} };
MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string) };

export default MovieCard;

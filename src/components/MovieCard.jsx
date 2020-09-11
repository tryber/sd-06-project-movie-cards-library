import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div>
        <img src={imagePath} alt="" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}
const string = PropTypes.string;
const number = PropTypes.number;
const obj = {
  title: string,
  subtitle: string,
  storyline: string,
  rating: number,
  imagePath: string,
};
MovieCard.propTypes = { movie: PropTypes.shape(obj).isRequired };

export default MovieCard;

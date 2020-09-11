import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <Rating rating={rating} />
        <p>{storyline}</p>
        <img src={imagePath} alt=""/>
      </div>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string
}

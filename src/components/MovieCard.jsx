// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <span>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        Prologo: {storyline}
        <br />
        Nota: {rating}
        <br />
        <img src={imagePath}></img>
        <br />
        <br />
      </span>
    );
  }
}

MovieCard.propTypes = {};

export default MovieCard;

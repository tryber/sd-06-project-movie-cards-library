// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <span>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div>{rating}</div>
        <img src={imagePath} alt="qlqr merd4" />
        <br />
        <br />
      </span>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.any).isRequired };

export default MovieCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath , rating } = this.props.movie;
    return (
      <div>
        <img src={ imagePath } alt="Movie Image"></img>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <div><Rating rating={ rating } /></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default MovieCard;

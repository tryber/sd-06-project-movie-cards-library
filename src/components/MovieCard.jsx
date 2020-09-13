import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath , rating } = this.props.movie;
    return(
      <div>Something</div>
    );
  }
}

export default MovieCard;

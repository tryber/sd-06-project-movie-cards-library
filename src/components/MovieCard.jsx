import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MovieCard extends Component {
  render(){
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
  };
};

MovieCard.PropTypes = {};

export default MovieCard;


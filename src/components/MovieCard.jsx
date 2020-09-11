import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyLine, rating, imagePath } = this.props;
    return (
      <img src={imagePath} alt="Movie" />
    );
  }
}

MovieCard.propTypes = { title: PropTypes.string };
MovieCard.defaultProps = { title: null };

export default MovieCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    const { imagePath } = movie;

    return (
      <div>
        <img src={imagePath} alt="" />
      </div>
    );
  }
}

MovieCard.defaultProps = { movie: {} };

MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string) };

export default MovieCard;

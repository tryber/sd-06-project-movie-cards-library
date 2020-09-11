import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    const { imagePath } = movie;

    return (<div>
      <img src={imagePath} alt="" />
    </div>);
  }
}

MovieCard.defaultProps = { imagePath: 'https://farm8.staticflickr.com/7172/6508022985_b22200ced0_z.jpg' };

MovieCard.propTypes = { imagePath: PropTypes.string };

export default MovieCard;

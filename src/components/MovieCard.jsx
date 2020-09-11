import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline } = movie;

    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt="" />
      </div>
    );
  }
}

MovieCard.defaultProps = { movie: {} };
MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string) };

export default MovieCard;

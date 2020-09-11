import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline } = this.props.movie;

    return (
      <div>
        <img src={imagePath}></img>
        <br />
        {title}
        <br />
        {subtitle}
        <br />
        {storyline}
      </div>
    );
  }
}

MovieCard.protoType = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
};

export default MovieCard;

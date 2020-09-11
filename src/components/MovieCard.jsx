import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.props;
    return (
      <ul>
        <li>{title}</li>
        <li>{subtitle}</li>
        <li>{storyline}</li>
        <li>{rating}</li>
        <li>{imagePath}</li>
      </ul>
    )
  }
};

export default MovieCard;
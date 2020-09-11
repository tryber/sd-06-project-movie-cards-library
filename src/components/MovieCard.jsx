import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    console.log(this)
    const { title, subtitle, storyline, rating, imagePath } = this.props.props;
    console.log(this);
    return (
      <ul>
        <li>{title}</li>
        <li>{subtitle}</li>
        <li>{storyline}</li>
        <li>{rating}</li>
        <li><img src={imagePath}></img></li>
      </ul>
    )
  }
};

export default MovieCard;
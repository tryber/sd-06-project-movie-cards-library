import React, { Component } from 'react';
import Rating from './Rating';



class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="card">
        <img src={imagePath} alt={title} className="cover-images" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;

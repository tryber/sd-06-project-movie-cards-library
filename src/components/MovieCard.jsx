import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie
    return (
      <div>
        <img src={imagePath} alt={`Movie poster image ${title}`} />
        <div>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;

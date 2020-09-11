import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.props;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating props={rating} />
        <img src={imagePath} alt={`Nome do filme ${title}`}></img>
      </div>
    );
  }
};

export default MovieCard;
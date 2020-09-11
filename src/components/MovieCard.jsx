import React, { Component } from 'react';
import Rating from './Rating';
import '../App.css';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card" key={movie.title}>
        <img alt="Movie poster" className="movie-card-image" src={movie.imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

export default MovieCard;

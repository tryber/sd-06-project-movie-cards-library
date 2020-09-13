import React, { Component } from 'react';
// import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const movie = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={imagePath} alt={`Imagem do Filme${title}`} height="160px" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;

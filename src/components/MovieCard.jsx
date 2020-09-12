import React, { Component } from 'react';
import movieType from '../types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return (
      <div className="movie-card">
        <img src={imagePath} alt={title} />
        <h4 className="movie-card-title">{title}</h4>
        <h5>{`Subtítulo: ${subtitle}`}</h5>
        <p>{`Sinopse: ${storyline}`}</p>
        {`Avaliação: ${rating}`}
      </div>
    );
  }
}

MovieCard.propTypes = movieType;

export default MovieCard;

import React, { Component } from 'react';
import movieType from '../types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return (
      <section className="movie-card">
        <img src={imagePath} alt={title} />
        <h4>{`Título: ${title}`}</h4>
        <h5>{`Subtítulo: ${subtitle}`}</h5>
        {`Sinopse: ${storyline}`}
        {`Avaliação: ${rating}`}
      </section>
    );
  }
}

MovieCard.propTypes = movieType;

export default MovieCard;

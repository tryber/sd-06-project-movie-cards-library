import React, { Component } from 'react';
import movieType from '../Types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return (
      <section className="movie-card">
        <img src={imagePath} alt={title} />
        <h4>{`Título: ${title}`}</h4>
        <h5>{`Subtítulo: ${subtitle}`}</h5>
        <p>{`Sinopse: ${storyline}`}</p>
        {`Avaliação: ${rating}`}
      </section>
    );
  }
}

MovieCard.propTypes = movieType;

export default MovieCard;

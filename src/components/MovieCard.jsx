import React, { Component } from 'react';
import movie from '../types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return (
      <section>
        {`Título: ${title}`}
        {`Subtítulo: ${subtitle}`}
        {`Sinopse: ${storyline}`}
        {`Avaliação: ${rating}`}
        <img src={imagePath} alt="" />
      </section>
    );
  }
}

MovieCard.propTypes = movie;

export default MovieCard;

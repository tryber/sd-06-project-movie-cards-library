import React, { Component } from 'react';
import movies from 'prop-types';

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

MovieCard.propTypes = {
  title: movies.string,
  subtitle: movies.string,
  storyline: movies.string,
  rating: movies.string,
  imagePath: movies.string,
};

MovieCard.defaultProps = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: '',
  imagePath: '',
};

export default MovieCard;

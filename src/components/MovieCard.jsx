import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.imagePath} alt="Movie Cover" />
        <h4>{this.props.movie.title}</h4>
        <h5>{this.props.movie.subtitle}</h5>
        <p>{this.props.movie.storyline}</p>
        <Rating rating={this.props.movie.rating} />
      </div>
    );
  }
}

// aqui criamos o componente MovieCard que recebe a prop movie
// recebe a imagem de cada filme, titulo, subtitulo sinopse e rating

MovieCard.defaultProps = { movie: {} };

MovieCard.propTypes = {
  movie: PropTypes
  .objectOf(PropTypes
    .oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]);
  );
};

export default MovieCard;

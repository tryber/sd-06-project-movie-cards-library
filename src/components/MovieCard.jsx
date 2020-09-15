import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt="imagem do filme" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
};
MovieCard.defaultProps = {
  movie: [],
  title: '',
  subtitle: '',
  storyline: '',
  imagePath: '',
  rating: 0,
};
// solução para o erro apontado pelo codeclimate
// (propType [name] is not required, but has no corresponding defaultProp declaration.)
// encontrada no StackOverflow:
// [https://stackoverflow.com/questions/52332394/if-a-proptype-isnt-required-why-eslint-want-to-provide-default-prop-for-it]

export default MovieCard;

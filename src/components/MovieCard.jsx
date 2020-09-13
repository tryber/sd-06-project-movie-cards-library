import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import MovieList from './MovieList';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath , rating } = this.props.movie;
    return (
      <div>
        <img src={ imagePath } alt="Movie Image"></img>
        <h4>{ title }</h4>
      </div>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieCard;

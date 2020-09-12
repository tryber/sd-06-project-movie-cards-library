// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <span>
        Titulo: {title}
        <br />
        SubTitulo: {subtitle}
        <br />
        Prologo: {storyline}
        <br />
        Nota: {rating}
        <br />
        <img src={imagePath}></img>
        <br />
        <br />
      </span>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default MovieCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    // const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    const movie = this.props.movie;
    console.log(movie.title)
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={movie.imagePath} alt={`Imagem do Filme${movie.title}`} height="160px" />
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <Rating rating={movie.rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,    
  })
}


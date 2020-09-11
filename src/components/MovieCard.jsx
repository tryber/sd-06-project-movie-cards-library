import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline: story, imagePath: img, rating } = this.props.movie;
    return (
      <div className="card-container">
        <img className="movie-img" src={img} alt={title} />
        <div className="texts-container">
          <h4 className="title">{ title }</h4>
          <h5 className="subtitle">{ subtitle }</h5>
          <p className="story">{ story }</p>
          <Rating rating={ rating }/>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propsType = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath:  PropTypes.string,
  }),
  movie: PropTypes.object,
  movie.title: PropTypes.string,
  movie.subtitle: PropTypes.string,
  movie.storyline: PropTypes.string,
  movie.rating: PropTypes.number,
  movie.imagePath: PropTypes.string,
};

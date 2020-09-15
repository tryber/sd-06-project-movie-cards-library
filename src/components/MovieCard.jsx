import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img src={movie.imagePath} alt="Movie Poster" />
        <div className="movie-card-body">
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
        </div>
        <div>
          <Rating rating={movie.rating} />
        </div>
      </div>
    );
  }
}
MovieCard.PropTypes = { movie: PropTypes.oneOfType([PropTypes.object]).isRequired };
export default MovieCard;

// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
        <span key={movie.title} />
        <img src={movie.imagePath} alt={movie.subtitle} />
        <h4 className="">{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.shape({}).isRequired };

export default MovieCard;

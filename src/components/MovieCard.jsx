import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title = 'Movie', subtitle = 'Movie', storyline = 'Sinopse', imagePath = 'Image', rating = 0 } = this.props.movie;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img scr={imagePath} className="movie-card-image" alt={`Movie: ${title} ${subtitle}`} />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

MovieCard.defaultProps = { movie: {} };
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieCard;

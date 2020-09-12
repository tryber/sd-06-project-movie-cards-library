import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.props.movie;

    return (
      <div class="movie-card">
        <img src={imagePath} alt={title} class="movie-card-image" />
        <div className="movie-card-body">
          <h4 class="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyLine">{storyline}</p>
          <div className="movie-card-rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes.shape({ name: PropTypes.string, age: PropTypes.number })
// Rating.propTypes = { rating: PropTypes.number };
MovieCard.propTypes = PropTypes.objectOf(PropTypes.string);

// {
//   movie.title: PropTypes.string,
//   movie.subtitle: PropTypes.string,
//   movie.imagePath: PropTypes.string,
//   movie.storyline: PropTypes.string,
// }

export default MovieCard;

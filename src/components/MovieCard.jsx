import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img src={imagePath} alt={title} className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{`${title}`}</h4>
          <h5 className="movie-card-subtitle">{`${subtitle}`}</h5>
          <p className="movie-card-storyline">{`${storyline}`}</p>
          <div className="movie-card-rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
};

MovieCard.defaultProps = {
  movie: {},
  title: 'Movie Title 1',
  subtitle: 'Movie Subtitle 1',
  storyline: 'Movie Storyline 1',
  imagePath: 'images/movie_1',
  rating: 4.5,
};

export default MovieCard;

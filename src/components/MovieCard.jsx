import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt={title} />
        <h4>{`${title}`}</h4>
        <h5>{`${subtitle}`}</h5>
        <p>{`${storyline}`}</p>
        <Rating rating={rating} />
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

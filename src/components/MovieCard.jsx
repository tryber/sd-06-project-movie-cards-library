import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    // const { imagePath, title, subtitle, storyline, rating } = this.props;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img src={this.props.movie.imagePath}
          alt={this.props.movie.title}
          className="movie-card-image" />
          <h4 className="movie-card-title">{this.props.movie.title}</h4>
          <h5 className="movie-card-subtitle">{this.props.movie.subtitle}</h5>
          <p className="movie-card-storyline">{this.props.movie.storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={this.props.movie.rating} /></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf.isRequired,
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;

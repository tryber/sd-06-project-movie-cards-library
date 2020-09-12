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
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.defaultProps = { movie: {} };
MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string) };

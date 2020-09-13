import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;  
    return (
      <div className="movie-card movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <img className="movie-card-image" src={imagePath}/>
        <Rating rating={rating} />
      </div>
    );
  }
}
  
MovieCard.defaultProps = { 
    movie: {} };

MovieCard.propTypes = { 
    movie: PropTypes.objectOf(PropTypes.string) };

export default MovieCard;

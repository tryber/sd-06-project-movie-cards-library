// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
      return (
          <div>
              <h4>{this.props.movie.title}</h4>
              <h5>{this.props.movie.subtitle}</h5>
              <p>{this.props.movie.storyline}</p>
              <Rating rating={this.props.movie.rating} />
              <img src={this.props.movie.imagePath}></img>
          </div>
        )
    }
}
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePatch: PropTypes.string.isRequired
};

export default MovieCard;

import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.props.movie;

    return (
      <div>
        <img src={imagePath} alt='' />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

movie: Proptypes.shape({
  movie.title: PropTypes.string,
  movie.subtitle: PropTypes.string,
  movie.imagePath: PropTypes.string,
  movie.storyline: PropTypes.string,
})
// MovieCard.propTypes = {
//   movie.title: PropTypes.string,
//   movie.subtitle: PropTypes.string,
//   movie.imagePath: PropTypes.string,
//   movie.storyline: PropTypes.string,
// }

export default MovieCard;

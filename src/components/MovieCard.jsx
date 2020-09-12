import React from 'react';
import Rating from './Rating';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <div className="movie-card-image">
            <img src={imagePath} alt={title} />
          </div>
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes.exact({
//     title: propTypes.string.isRequired,
//     subtitle: propTypes.string.isRequired,
//     storyline: propTypes.string.isRequired,
//     imagePath: propTypes.string.isRequired,
//     rating: propTypes.string.isRequired,
//   }).isRequired,
// };

export default MovieCard;

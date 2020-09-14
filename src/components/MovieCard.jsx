// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
      <img src={movie.imagePath} alt={movie.subtitle}/>
      <h4 className="">{movie.title}</h4>
      <h5>{movie.subtitle}</h5>
      <p>{movie.storyline}</p>
      <span className="rating">{movie.rating}</span>
      <span key={movie.title} />
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   // movies: PropTypes.array.isRequired,
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// }

export default MovieCard;

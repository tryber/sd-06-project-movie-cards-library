// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
      const { movie } = this.props;
    return (
    <div className="card">
       <img src={movie.imagePath} />
       <h4>{movie.title}</h4>
       <h5>{movie.subtitle}</h5>
       <p>{movie.storyline}</p>
       <span className="rating">{movie.rating}</span>
       <li key={movie.title}></li>
    </div>
    );
  }
}

MovieCard.propTypes = {
  // movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default MovieCard;
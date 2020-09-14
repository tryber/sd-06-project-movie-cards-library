// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="movie-list">
        <img src={imagePath} alt={subtitle} />
        <h4 className="">{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <span className="rating">{rating}</span>
        <span key={title} />
      </div>
    );
  }
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;

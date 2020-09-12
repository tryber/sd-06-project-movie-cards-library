import React from 'react';
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
    )
  };
}

// MovieCard.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
// };

export default MovieCard;

// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath} = this.props.movie;
    return (
        <div>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{storyline}</p>
            <Rating rating={rating} />
            <img src={imagePath}></img>
        </div>
    )
    }
}
MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.string).isRequired}
MovieCard.propTypes = {

    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePatch: PropTypes.string
};

export default MovieCard;

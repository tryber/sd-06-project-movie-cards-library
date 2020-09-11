import React from 'react';
import Rating from './Rating'
// import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath} = this.props;
    return (
      <div>
        <img src={imagePath}></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating}/>
      </div>
    );
  }
}

// Header.propTypes = { title: PropTypes.string, };
export default MovieCard;

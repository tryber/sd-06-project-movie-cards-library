import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const ratingInfo = this.props.rating;
    return (
      <span className="rating">{ratingInfo}</span>
    );
  }
}

Rating.propTypes = {
  ratingInfo: PropTypes.number,
};

export default Rating;

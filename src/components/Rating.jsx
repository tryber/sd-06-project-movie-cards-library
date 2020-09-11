import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating">
        <div className="rating">{this.props.rating}</div>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;

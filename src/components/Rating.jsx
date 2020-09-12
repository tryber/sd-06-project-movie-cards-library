import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="rating-container">
        <div className="rating">{rating}</div>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = { rating: PropTypes.number };
Rating.defaultProps = { rating: 0 };

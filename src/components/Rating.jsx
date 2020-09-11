import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <p className="rating">{this.props.rating}</p>
    );
  }
}

export default Rating;

Rating.propTypes = { rating: PropTypes.string };

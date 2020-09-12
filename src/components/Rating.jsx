import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <span className="rating">
        {this.props.rating}
      </span>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number }.isRequired;

export default Rating;

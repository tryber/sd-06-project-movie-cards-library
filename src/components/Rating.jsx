import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const rate = this.props.rating;
    return (
      <div className="rating">{rate}</div>
    );
  }
}

Rating.defaulProps = { rating: {} };

Rating.propTypes = { rating: PropTypes.objectOf.isRequired };

export default Rating;

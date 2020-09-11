import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Rating extends Component {
  render() {
    const rating = this.props;
    return (<div>{rating}</div>);
  }
}

Rating.PropTypes = { rating: PropTypes.number };

export default Rating;


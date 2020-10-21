/* eslint-disable react/prop-types */
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <h3 className="rating">{rating}</h3>
    );
  }
}

export default Rating;

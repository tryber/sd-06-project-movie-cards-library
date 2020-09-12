import React, { Component } from 'react';

class Rating extends Component {
  render() {
    {
      const { rating } = this.props;
      return (
        <div>
          <p>{rating}</p>
        </div>
      );
    }
  }
}

Rating.prototype = { rating: propTypes.number.isRequired };

export default Rating;

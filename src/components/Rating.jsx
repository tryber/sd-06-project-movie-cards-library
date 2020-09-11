import React, { Component } from 'react';

class Rating extends Component {
  render() {
    {
      const { rating } = this.props.props;
    return (
      <p props={rating}></p>
    );
    }
    
  }
}

export default Rating;
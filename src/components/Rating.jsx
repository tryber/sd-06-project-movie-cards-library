import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div>
        <span className="rating">{this.props.rating}</span>
      </div>
    )
  }
}

export default Rating;

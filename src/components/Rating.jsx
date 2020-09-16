import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div>
        <p className='rating'>{this.props.rating}</p>
      </div>
    )
  }
}

export default Rating;

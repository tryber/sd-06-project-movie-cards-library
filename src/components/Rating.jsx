import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div>
        <div className="rating">{this.props.rating}</div> 
      </div>
    );
  }
}

export default Rating;

import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <footer className="rating">{this.props.rating}</footer>
    );
  }
}

export default Rating;

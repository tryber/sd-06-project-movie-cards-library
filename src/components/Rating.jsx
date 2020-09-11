import React, { Component } from 'react';

export default class Rating extends Component {
  render() {
    const moviesRating = this.props.rating;
    return (
      <div>
       <p className="rating">{moviesRating}</p>
      </div>
    )
  }
}

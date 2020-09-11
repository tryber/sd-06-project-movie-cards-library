import React from 'react';

class Rating extends React.Component {
  render() {
  return <p className="movie-card-rating"><span className="rating">{this.props.rating}</span></p>;
  }
}

export default Rating;

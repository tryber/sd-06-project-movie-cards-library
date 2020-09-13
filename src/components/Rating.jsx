import React from 'react';

class Rating extends React.Component {
  render() {
    const ratingInfo = this.props.rating;
    return (
      <span className="rating">{ratingInfo}</span>
    );
  }
}

export default Rating;

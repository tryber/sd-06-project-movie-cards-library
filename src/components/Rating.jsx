import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating"> 
        <span className="rating">{this.props.rating}</span>
      </div>
    )
  }
}

export default Rating;
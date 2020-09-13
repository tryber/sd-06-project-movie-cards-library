import React from 'react';

class Rating extends React.Component {
  render () {
    return (
      <span className='movie-card-rating'>
        <p className='rating'>{this.props.rating}</p>
      </span>
    )
  }
}

export default Rating;

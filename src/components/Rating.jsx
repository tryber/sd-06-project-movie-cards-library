import React from 'react';

class Rating extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    )
  }
}

export default Rating;
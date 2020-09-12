import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div>
        <p className="rating">{this.props.rating}</p>
      </div>
    );
  }
}

export default Rating;
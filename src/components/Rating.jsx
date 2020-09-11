import React from 'react';

class Rating extends React.Component {
  render() {
    return <div>
      <div>
        Rating
      </div>
      <div>
        {this.props.value}
      </div>
    </div>
  }
}

export default Rating;
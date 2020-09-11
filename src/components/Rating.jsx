import React, { Component } from 'react';

class Rating extends Component {
    render () {
        return (
        <small className="rating">
            {this.props.rating}
        </small>
        )
    }
};

export default Rating;

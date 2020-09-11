import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Rating extends Component {
    render(){
        return this.props.rating;
    };
};

Rating.PropTypes = { rating: PropTypes.number };

export default Rating;


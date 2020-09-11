import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MovieCard extends Component {
  render(){
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
        <div>
          <img src={imagePath} alt=""/>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{storyline}</p>
        </div>
    );
  };
};

MovieCard.PropTypes = {};

export default MovieCard;


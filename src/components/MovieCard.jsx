import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props;
    return (
      <div className="moviecard">
        <div>
          <img src={imagePath} alt={`Movie: ${title}`} />
        </div>
        <br />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;

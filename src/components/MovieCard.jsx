import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props

    return (
      <div className="pokemon">
        <div>
          <img src={imagePath} alt={title} />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <br />
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string
}

export default MovieCard
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
      const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

      return (
          <div className="movie-card">
              <img className="movie-card-image" src={ imagePath } alt="filme"/>
              <h4 className="movie-card-title">{ title }</h4>
              <h5 className="movie-card-subtitle">{ subtitle }</h5>
              <p className="movie-card-storyline">{ storyline }</p>
              <div className="movie-card-rating">
                  <p className="rating">Nota: { rating }</p>
              </div>
          </div>
        )
    }
}

export default MovieCard;

import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return(
      <div className='movie-card'>
        {title}
        {subtitle}
      </div>
    )
  }
}

export default MovieCard;

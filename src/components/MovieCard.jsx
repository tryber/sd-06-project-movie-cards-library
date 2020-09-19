import React from 'react';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title = 'Movie', subtitle = 'Movie', storyline = 'Sinopse', imagePath = 'Image', rating = 0 } = this.props.movie;

    return (
      <div>
        <img scr={imagePath} />;
        <h4 className={title} />;


      </div>
    )
  }
}

export default MovieCard;

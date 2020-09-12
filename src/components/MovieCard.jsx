import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.eachMovie;
    return (
    <div>
      <img src={imagePath}/>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <article>{storyline}</article>
      <p>{rating}</p>
    </div>
    )
  }
}

export default MovieCard;

import React, { Component } from 'react';
// import movies from 'prop-types';

class MovieList extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return (
      <div>
        {`Título: ${title}`}
        {`Subtítulo: ${subtitle}`}
        {`Sinopse: ${storyline}`}
        {`Avaliação: ${rating}`}
        <img src={imagePath} alt=""></img>
      </div>
    );
  }
}
// MovieList.prototype = {
//   title: movies.string,
//   subtitle: movies.string,
//   storyline: movies.string,
//   rating: movies.string,
//   imagePath: movies.string,
// }
export default MovieList;

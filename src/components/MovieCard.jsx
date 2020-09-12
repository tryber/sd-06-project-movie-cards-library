import React from 'react';

import movies from '../data';

class MovieCard extends React.Component {
  render() {
  return <h1>{movies[0].title}</h1> // pq um object?
  }
}

export default MovieCard;

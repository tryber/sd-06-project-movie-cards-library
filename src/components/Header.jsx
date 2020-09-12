import React from 'react';

import MovieCard from './MovieCard'; // teste
class Header extends React.Component {
  render() {
    return (
    <header>
      <h1>Movie Cards Library</h1>
      <MovieCard />
    </header>)
  }
}

export default Header;
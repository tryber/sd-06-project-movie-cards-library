import React, { Component } from 'react';
import movies from '../data';
import MovieList from './MovieList';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Movie Cards Library</h1>
        </header>
        <div>
          {movies.map((filme, index) => {
            return <MovieList
              key={index}
              title={filme.title}
              subtitle={filme.subtitle}
              storyline={filme.storyline}
              rating={filme.rating}
              imagePath={filme.imagePath}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Header;

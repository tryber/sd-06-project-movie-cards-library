import React from 'react';
import movies from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="movie-list">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;

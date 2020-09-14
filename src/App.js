import React from 'react';
import './App.css';
import movies from './data.js';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div>
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

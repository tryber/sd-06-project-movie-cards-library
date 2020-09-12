import React from 'react';
import './App.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import movies from './data.js';
import MovieList from './components/MovieList.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

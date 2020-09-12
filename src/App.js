import React from 'react';
import './App.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';
import movies from './data';

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <MovieList movies={movies} />
      </body>
    </div>
  );
}

export default App;

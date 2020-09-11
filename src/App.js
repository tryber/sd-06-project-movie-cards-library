import React from 'react';
import './App.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import './components/Header'
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;

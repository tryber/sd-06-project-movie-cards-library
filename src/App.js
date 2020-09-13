import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import data from './data'
import Header from './components/Header';
// import MovieCard from './components/MovieCard'
// import MovieList from './components/MovieList';
import Rating from './components/Rating'

function App() {
  return (
    <div className="App">
      < MovieList />< Header />

    </div>
  );
}

export default App;

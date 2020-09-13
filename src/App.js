import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList className='movie-card-body' movies={movies}/>
    </div>
  );
}
export default App;

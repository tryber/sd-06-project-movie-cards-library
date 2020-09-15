import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render () {
    return(
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
//       Hora de codar! 🚀✍️👨‍💻👩‍💻💪
//     </div>
//   );
// }

// export default App;

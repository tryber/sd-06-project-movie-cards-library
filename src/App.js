import React from 'react';
import './App.css';

// Para importar meu componente HEADER
import Header from './components/Header';

function App() {
  return (
    // Dentro desta div vou chamar meus Componentes
    // para serem todos "juntados" em um só arquivo
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react'

function App() {
  const n = 15
  const [name] = useState('Marcos')
  const redTitle = true
  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Esse paragrafo é do App</p>
      {/* Inline CSS */}
      <p style={{
          color: 'blue', 
          padding: '25px', 
          borderTop: '2px solid red'
        }}>
        Esse elemneto foi estilizado de forma inline
      </p>
      {/* Css Inline dinâmico*/}
      <h2 style={ n > 10 ? { color: 'green' } : { color: 'red' } }>
        CSS Diâmico
      </h2>
      <h2 style={ n < 10 ? { color: 'green' } : { color: 'red' } }>
        CSS Diâmico
      </h2>
      <h2 style={ name.toLocaleUpperCase() === 'MARCOS' ? { color: 'green' } : { color: 'red' } }>
        Marcos
      </h2>
      {/* Classe dinâmica */}
      <h2 className={ redTitle ? 'green-title' : 'red-title' }>
        Esse título vai ter classe dinâmica
      </h2>
    </div>
  );
}

export default App;

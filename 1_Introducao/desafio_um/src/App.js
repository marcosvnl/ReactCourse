import {useState} from 'react'
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  return (
    <div className="App">
      <form>
        <label>Você estuda react?</label>
        <input
          className={response.toUpperCase().charAt() === 'S' ? 'veryGood' : ''} 
          type="text" 
          name='response'
          placeholder='Sua Resposta'
          onChange={ (e) => setResponse(e.target.value)}
          value={response || ''}
          required
        />
        {response.toUpperCase() === 'SIM' ? <p className='Congratulations'>Parabéns por iniciar essa jornada!!!</p> : ''}
        <input type="submit" value='Enviar Resposta'/>
      </form>
    </div>
  );
}

export default App;

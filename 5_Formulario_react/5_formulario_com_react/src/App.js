import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user = {{ name: 'Jeremisas', email: 'jjs@email.com', bio: 'Lavo, passo e cozinho', role: 'editor' }}/>
    </div>
  );
}

export default App;

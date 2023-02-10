import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  
  const pessoas = [
      {id: 1, name: 'Jorge', age: 56, profession: 'Professor'},
      {id: 2, name: 'Maria', age: 30, profession: 'Cientista de dados'},
      {id: 3, name: 'Manoel', age: 16, profession: 'Estagiario em T.I'},
      {id: 4, name: 'James', age: 12, profession: 'Estudante'}
  ]
  
  return (
    <div className="App">
      {pessoas.map((p) => (

        <UserDetails key = { p.id }
          id         = { p.id } 
          name       = { p.name }
          age        = { p.age }
          profession = { p.profession }
        />
      ))}
    </div>
  );
}

export default App;

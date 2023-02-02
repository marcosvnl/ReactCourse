import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import EventComponent from './components/EventComponent';
import './App.css';

const App = () => {
  //Tem comentario aqui
  return (
    <div className="App">
      <MyComponent />
      {/*Tem comentaario aqui*/}
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <EventComponent />
    </div>
  );
}

export default App;

import './App.css';

//Router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//Pages
import Home from './pages/Home';
import About from './pages/About';

//Context
import { HookUseContext } from './components/HookUseContext';


function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/about'>Sobre</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;

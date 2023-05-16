import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Abount from './pages/About'
import Product from './pages/Products';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Context API do React</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/abount' element={<Abount/>} />
          <Route path='/products' element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

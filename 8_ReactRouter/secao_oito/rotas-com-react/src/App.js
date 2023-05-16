import './App.css';
//1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info';
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm';
import Search from './pages/Search';
//components
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products/:id' element={<Product/>} />
          <Route path='/products/:id/info' element={<Info/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/company' element={<Navigate to='/about' />} /> {/*redirecionamanto*/}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

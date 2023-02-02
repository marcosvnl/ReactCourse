import { useState } from 'react'
import GTR35Blue from './assets/GTR35Azul.jpg'
import ConditinalRender from './components/ConditinalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManegeData'
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Cars from './mocks/Cars'
import './App.css';

function App() {
  const name = 'Zéca Urubu'
  const [userName] = useState('Maria') 
  return (
    <div className="App">
      <h1>Seção 3</h1>
      <div>
        <img src="GTR34Black.jpg" alt="gtr34" />
        <img src={ GTR35Blue } alt="gtr35" />
        <ManageData />
        <ListRender />
        <ConditinalRender />
        {/*props*/}
        <ShowUserName name = { userName }/>
        {/*dstructuring*/}
        <CarDetails brand = 'Ford' km = { 250000 } color = 'Cinza Egypsio' newCar = { false }/>
        {/*reaproveitando*/}
        <CarDetails brand = 'BYD' km = { 0 } color = 'Cinza Claro' newCar = { true }/>
      </div>
    </div>
  );
}

export default App;

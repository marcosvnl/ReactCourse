import { useState } from 'react'
import GTR35Blue from './assets/GTR35Azul.jpg'
import ConditinalRender from './components/ConditinalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManegeData'
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container  from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import './App.css';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  //const name = 'Zéca Urubu'
  const [userName] = useState('Maria') 
  const cars = [
    {'id': 1, 'brand': 'Ford', 'km': 250000, 'color': 'Cinza Egypcio','newCar': false},
    {'id': 2, 'brand': 'WV', 'km': 0, 'color': 'Preto', 'newCar': true},
    {'id': 3, 'brand': 'Honda', 'km': 80000, 'color': 'Cinza', 'newCar': false},
    {'id': 4, 'brand': 'Chevrollet', 'km': 0, 'color': 'Branco', 'newCar': true},
    {'id': 5, 'brand': 'Mazda', 'km': 25000, 'color': 'Vermelho', 'newCar': false},
    {'id': 6, 'brand': 'Nissan', 'km': 0, 'color': 'Azul', 'newCar': true},
    {'id': 7, 'brand': 'Toyota', 'km': 253000, 'color': 'Prata', 'newCar': false},
    {'id': 8, 'brand': 'BYD', 'km': 0, 'color': 'Preto', 'newCar': true},
    {'id': 9, 'brand': 'Kia', 'km': 0, 'color': 'Laranja', 'newCar': true},
    {'id': 10,'brand': 'Citroen', 'km': 20000, 'color': 'Cinza Chumbo', 'newCar': false},
  ]

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
        {/*loop em array de objs*/}
        {
          cars.map((car) => (
            <CarDetails key={car.id} id = {car.id} brand = {car.brand} km = {car.km} color = {car.color} newCar = {car.newCar}/>
          ))
        }
        {/*Frafment === tag vazia*/}
        <Fragment />
        {/*childrean*/}
        <Container myValue = 'Teste'>
          <p>E esse é o conteudo</p>
        </Container>
        {/* executar função */}
        <ExecuteFunction  myFunction = { showMessage }/>
        {/* state lift */}
        <Message msg = { message }/>
        <ChangeMessageState handleMessage = { handleMessage }/>
      </div>
    </div>
  );
}

export default App;

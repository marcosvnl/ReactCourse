import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {'id': 1, 'brand': 'Ford', 'km': 250000, 'color': 'Cinza Egypcio','newCar': false},
    {'id': 2, 'brand': 'WV', 'km': 0, 'color': 'Preto'},
    {'id': 3, 'brand': 'Honda', 'km': 80000, 'color': 'Cinza'},
    {'id': 4, 'brand': 'Chevrollet', 'km': 0, 'color': 'Branco'},
    {'id': 5, 'brand': 'Mazda', 'km': 25000, 'color': 'Vermelho'},
    {'id': 6, 'brand': 'Nissan', 'km': 0, 'color': 'Azul'},
    {'id': 7, 'brand': 'Toyota', 'km': 253000, 'color': 'Prata'},
    {'id': 8, 'brand': 'BYD', 'km': 0, 'color': 'Preto'},
    {'id': 9, 'brand': 'Kia', 'km': 0, 'color': 'Laranja'},
    {'id': 10,'brand': 'Citroen', 'km': 20000, 'color': 'Cinza Chumbo'},
  ]
  return (
    <div className="App">
      <h1 className = 'car-title'>Car Details:</h1>
      {cars.map((c) => (<CarDetails key={ c.id } 
          id = { c.id }
          brand = { c.brand }
          km = {c.km}
          color = {c.color}        
        />
      ))}
    </div>
  );
}

export default App;

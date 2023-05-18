import { useCounterContext } from '../hooks/useCounterContext'
import ChangeCounter from '../components/ChangeCounter'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

//css
import './Home.css'


const Home = () => {
  const { counter } = useCounterContext()
  const { color, dispatch } = useTitleColorContext()
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  console.log(color)
  return (
    <div>
        <h1 style={{ color: color }}>Home</h1>
        <p>Contador: {counter}</p>
        {/*Mudar o valor do contesto*/}
        <ChangeCounter />
        <div>
          <button onClick={() => setTitleColor('RED')}>Vermelho</button>
          <button onClick={() => setTitleColor('BLUE')}>Azul</button>
        </div>
    </div>
  )
}

export default Home
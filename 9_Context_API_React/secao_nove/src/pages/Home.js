import { useCounterContext } from '../hooks/useCounterContext'
import ChangeCounter from '../components/ChangeCounter'

//css
import './Home.css'


const Home = () => {
  const { counter } = useCounterContext()
  
  return (
    <div>
        <h1>Home</h1>
        <p>Contador: {counter}</p>
        {/*Mudar o valor do contesto*/}
        <ChangeCounter />
    </div>
  )
}

export default Home
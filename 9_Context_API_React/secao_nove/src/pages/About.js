import { useContext } from 'react'
import './About.css'
import ChangeCounter from '../components/ChangeCounter'
import { CounterContext } from '../context/CounterContext'

const About = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
        <h1>About</h1>
        <p>Contador: {counter}</p>
        {/*Mudar o valor do contesto*/}
        <ChangeCounter />
    </div>
  )
}

export default About
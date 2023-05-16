import { useContext } from 'react'
import './Products.css'

import ChangeCounter from '../components/ChangeCounter'
import { CounterContext } from '../context/CounterContext'

const Products = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
        <h1>Products</h1>
        <p>Contador: {counter}</p>
        {/*Mudar o valor do contesto*/}
        <ChangeCounter />
    </div>
  )
}

export default Products
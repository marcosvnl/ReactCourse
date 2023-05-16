import {useSearchParams, Link} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
  const [seachParams] = useSearchParams()
  const url = `http://localhost:3000/products?${seachParams}`
  const {data: itens, loading, error} = useFetch(url)
  
    return (
    <div>
        <h1>Resultados Disponíveis</h1>
        {error && <p>{error}</p>}
        <ul className="products">
            {itens && itens.map((item) => (
            <li key={item.id}>
                <h2 className='titleProduct'>{item.name}</h2>
                <p>R$: {item.price}</p>
                <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Search
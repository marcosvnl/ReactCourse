import './App.css';
import { useState, useEffect } from 'react';
//4 - custom hook
import { useFetch } from './hooks/useFetch'
const url = 'http://localhost:3000/products'

function App() {
  //const [protucts, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  //custom hook
  const { data : items, httpConfig, loading, erros } = useFetch(url)
 
  //1- resgatando dados
  // useEffect(() => {
  //   const fetchData = async () =>{
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setProducts(data)
  //   }
  //   fetchData()
  // }, [])

  {/*add produtos*/}
  const handleSubmit = async (event) =>{
    event.preventDefault()
    const product = {
      name,
      price
    }
    
    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(product)
    // })

    // //3 - carregamento dinâmico
    // const addeProduct = await response.json()
    // setProducts((prevtDefault) => [...prevtDefault, addeProduct])

    //5 - refatorando post
    httpConfig(product, "POST")

    setName('')
    setPrice('')
  }

  const handleDelete = (id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/*6 - loading*/}
      {loading && <p>Carregando...</p>}
      {erros && <p>{ erros }</p>}
      {!erros &&
        <ul>
        {
          items && items.map((p) => (
            <li key={ p.id }>
              { p.name } - R$: { p.price }
              <button onClick={() => handleDelete(p.id)}>Excluir</button>
            </li>
          ))
        }
        </ul>
      }
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={ name } name='name' placeholder='Digite nome do produto'  onChange={ (e) => setName(e.target.value) }/>
          </label>
          <label>
            Preço:
            <input type="text" value={ price } name='price' placeholder='Digite o preço' onChange={ (e) => setPrice(e.target.value) }/>
          </label>
          {/*7 - satete de loading no post*/}
          {!loading ? <input type="submit" value='Criar'/> : <input type="submit" disabled value='Aguarte'/>}
        </form>
      </div>
    </div>
  );
}

export default App;

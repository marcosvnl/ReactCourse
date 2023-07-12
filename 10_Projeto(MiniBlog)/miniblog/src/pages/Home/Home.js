import style from './Home.module.css'

//hooks
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFatchDocuments } from '../../hooks/useFatchDocuments'

const Home = () => {
  const [query, setQuery] = useState('')
  const {documents: posts, loading} = useFatchDocuments('posts')
  const handleSubmit = (e) => {
    e.preventDefalt()
  }

  return (
    <div className={ style.home }>
        <h1>Veja os nosso posts mais recentes.</h1>
        <form onSubmit={ handleSubmit } className={ style.search_form }>
          <input type="text"  placeholder='"Ou busque por tags..."' onChange={ (event) => setQuery(event.target.value) }/>
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div>
          {
            loading && <p>Carregando...</p>
          }
          {
            posts && posts.map((post) => <h3>{ post.title }</h3>)
          }
          {
            posts && posts.length === 0 && (
              <div className={ style.noposts }>
                <p>Não forem encontrados posts</p>
                <Link to='/posts/create' className='btn'>Criar primeiro post</Link>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Home
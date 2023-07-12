import style from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseAuthValue, useAuthValue } from '../../context/AuthContect'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [formError, setFormError] = useState('')

  const {insertDocument, response} = useInsertDocument('posts')
  const {user} = useAuthValue()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError('')

    // validar imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.')
    }

    // criar a array de tags
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLocaleLowerCase())

    // checar todos os valores
    if (!title || !image || !body || tags){
      setFormError('Por favor, preencha todoa os campos!')
    }

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect to home page
    navigate('/')
  }
  
  return (
    <div className={ style.create_post }>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input type="text" name='title' value={ title } onChange={ (event) => setTitle(event.target.value) } required placeholder='pense em um bom título.'/>
          </label>
          <label>
            <span>URL da imagem</span>
            <input type="text" name='image' value={ image } onChange={ (event) => setImage(event.target.value) } required placeholder='Insira uma imagem que representa o seu post.'/>
          </label>
          <label>
            <span>Conteúdo</span>
            <textarea name="body" value={ body } onChange={ (event) => setBody(event.target.value) } required placeholder='Isira o conteúdo do post'></textarea>
          </label>
          <label>
            <span>Tags</span>
            <input type="text" name='tags' value={ tags } onChange={ (event) => setTags(event.target.value) } required placeholder='Insira as tags separadas por vígula.'/>
          </label>
          { !response.loading && <button className='btn'>Cadastrar</button> }
          { response.loading &&<button className='btn' disabled>Aguarde...</button> }
          { response.error && <p className="error">{ response.error }</p> }
          { formError && <p className="error">{ formError }</p> }
        </form>
    </div>
  )
}

export default CreatePost
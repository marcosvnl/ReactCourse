import { useAuthentication } from '../../hooks/useAuthentication'
import style from './Register.module.css'
import { useState, UseEffect, useEffect } from 'react'

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirPassword, setConfirPassword] = useState('')
  const [error, setError] = useState('')

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirPassword) {
      setError('As senhas precisam se iguais!')
      return
    }

    const response = await createUser(user)

    console.log(user)

    if (!error || !authError) {
      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirPassword('')
      setError('')
    }
  }

  useEffect(() => {
    if (authError){
      setError(authError)
    }
  }, [authError])
  
  return (
    <div className={ style.register }>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={ handleSubmit }>
        <label>
          <span>Nome:</span>
          <input type="text" value={ displayName } onChange={ (event) => setDisplayName(event.target.value) } name='name' required placeholder='Nome do usuário'/>
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name='email' value={ email } onChange={ (event) => setEmail(event.target.value) } required placeholder='e-mail do usuário'/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' value={ password } onChange={ (event) => setPassword(event.target.value) } required placeholder='Isira sua senha'/>
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input type="password" name='confirPassword' value={ confirPassword } onChange={ (event) => setConfirPassword(event.target.value) } required placeholder='Confirmar senha'/>
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading &&<button className='btn' disabled>Aguarde...</button>}
        { error && <p className="error">{ error }</p> }
      </form>
    </div>
  )
}

export default Register
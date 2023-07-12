import { useAuthentication } from '../../hooks/useAuthentication'
import { useState, UseEffect, useEffect } from 'react'
import style from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {login, error: authError, loading} = useAuthentication()
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = {
      email,
      password
    }

    const response = await login(user)

    console.log(user)

  }

  useEffect(() => {
    if (authError){
      setError(authError)
    }
  }, [authError])
  
  return (
    <div className={ style.login }>
       <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={ handleSubmit }>
        <label>
          <span>E-mail:</span>
          <input type="email" name='email' value={ email } onChange={ (event) => setEmail(event.target.value) } required placeholder='e-mail do usuário'/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' value={ password } onChange={ (event) => setPassword(event.target.value) } required placeholder='Isira sua senha'/>
        </label>
        
        {!loading && <button className='btn'>Entrar</button>}
        {loading &&<button className='btn' disabled>Aguarde...</button>}
        { error && <p className="error">{ error }</p> }
      </form>
    </div>
  )
}

export default Login
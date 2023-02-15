import './MyForm.css'
import { useState } from 'react'
const MyForm = ({ user }) => {
    // 6 - contolled inputs
    
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Enviando o formulário.')
        console.log(name, email, bio, role)
        
        // validação
        // envio

        // 7 - limpar formulário
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }
  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação do form */}
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type="text" value={ name } name='name' placeholder='Digite seu nome' onChange={ handleName }/>
            </div>
            {/* 2 - label envolvendo o input*/}
            <label>
                <span>E-mai</span>
                {/* 4 - simplicicar o state (inline) */}
                <input type="text" value={ email } name='email' placeholder='Digite o seu e-mail' onChange={ (e) => setEmail(e.target.value) }/>
            </label>
            {/* 8 - textaria */}
            <label>
                <span>Bio:</span>
                <textarea name='bio' value={ bio } placeholder='Descrição do usuário' onChange={ (event) => setBio(event.target.value) }></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name='role' value={ role } onChange={ (e) => setRole(e.target.value) }>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input className='butao' type='submit' value='Enviar'/>
        </form>
    </div>
  )
}

export default MyForm
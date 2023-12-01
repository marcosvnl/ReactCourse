import { useState } from 'react'

const HookUseState = () => {
    let userName = 'João'
    const [name, setName] = useState('Marcos')

    // uso no input
    const [age, setAge] = useState(18)

    const changeName = () => {
        userName = 'João M'
        setName('Marcos V')

        console.log({ userName })
        console.log({ name })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        //Simula envio para uma API
        console.log(age)
    }

    return (
    <div>
        <h2>useState</h2>
        <p>Variével: { userName }</p>
        <p>useState: { name }</p>
        <button onClick={ changeName }>Mudar nome</button>
        <hr />
        
        <p>Digite sua idade:</p>
        <form onSubmit={ handleSubmit }>
            <input type='text' value={ age } onChange={ (event) => { setAge(event.target.value) } }/>
            <input type='submit' value='Enviar' />
        </form>
        <p>Você tem { age } anos de idade.</p>
    </div>
  )
}

export default HookUseState
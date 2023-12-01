import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })
    
// useRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setText('')

        inputRef.current.focus()
    }

    return (
        <div>
            <h2>UseRaf</h2>
            <p>O componente renderezou: { numberRef.current } vezes</p>
            <p>Counter 1: { counter }</p>
            <button onClick={ () => setCounter(counter + 1) }>Counter 1 + 1</button>
            <p>Counter 1: { counterB }</p>
            <button onClick={ () => setCounterB(counterB + 1) }>Counter B + 1</button>
            
            <form onSubmit={ handleSubmit }>
                <input type="text" ref={ inputRef } value={ text } onChange={ (event) => setText(event.target.value) }/>
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
    )
}

export default HookUseRef
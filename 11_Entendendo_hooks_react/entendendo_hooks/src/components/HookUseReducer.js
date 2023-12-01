import { useReducer, useState } from 'react'

const HookUseReducer = () => {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    //Reducer com action
    const initialTask = [
        {id: 1, text: 'Fazer uma coisa'},
        {id: 2, text: 'Fazer outra coisa'}
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText('')
                return [...state, newTask]
            
            case 'DELETE':
                return state.filter((t) => t.id !== action.id)

            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState('')
    const [task, dispatchTask] = useReducer(taskReducer, initialTask)

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatchTask({ type: 'ADD' })
    }

    const removeTask = (id) => {

        dispatchTask({ type: 'DELETE', id: id })
    }

    return (
    <div>
        <h2>useReducer</h2>
        <p>Número: { number }</p>
        <button onClick={ dispatch }>Alterar número</button>
        <form onSubmit={ handleSubmit }>
            <input type='text' onChange={ (event) => setTaskText(event.target.value) }  value={ taskText } />
            <input type='submit' value='Enviar' />
        </form>
        <h2>Térefas:</h2>
        {task.map((t) => (
            <li key={t.id} onDoubleClick={ () => removeTask(t.id) }>{ t.text }</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer
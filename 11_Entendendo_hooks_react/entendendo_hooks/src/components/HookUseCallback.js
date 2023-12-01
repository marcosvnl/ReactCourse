import { useCallback, useState } from 'react'
import List from './List'


const HookUseCallback = () => {
    const [count, setCount] = useState(0)
    const getItemsFromDatabase = useCallback( () => {
        return ['a', 'b', 'c']
    }, [])
    
    return (
        <div>
            <h2>UseCallback</h2>
            <List getItems={ getItemsFromDatabase } />
            <button onClick={ () => setCount(count + 1) }>Alterar</button>
            <p>{ count }</p>
            <hr />
        </div>
    )
}

export default HookUseCallback
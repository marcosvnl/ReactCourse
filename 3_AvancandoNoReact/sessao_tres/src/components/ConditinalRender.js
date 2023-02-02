import { useState } from 'react'

const ConditinalRender = () => {
    const [x] = useState(true)
    const [name] = useState('João')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            { x &&  <p>sim, está sendo exibido!</p>}
            <h1>If ternário</h1>
            { 
                name.toLocaleUpperCase() === 'JOÃO' ? 
                    <p>O seu nome é { name }</p> : <p>O seu nome não é João</p> 
            }
        </div>
    )
}

export default ConditinalRender
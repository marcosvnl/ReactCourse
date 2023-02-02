import {useState} from 'react'

const ManegeData = () => {
    const [number, setNumber] = useState(1)
    return (
    <div>
        <p>Valor: { number }</p>
        <button onClick={ () =>  setNumber(number + 1)}>Numero</button>
    </div>
    )
}

export default ManegeData;

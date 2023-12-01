import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    
    // dispara a qualquer reenderização
    useEffect(() => {
        console.log('Em execução.')
    })

    // dispara apenas quando o conponente ou página é chamado
    useEffect(() => {
        console.log('Apenas uma vez')
    }, [])

    // dispara apenas quando a variável sofre alteração de valor
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() => {
        if (anotherNumber > 0) {
            console.log(`Variável ${typeof(anotherNumber)} - anotherNumber em execução`)
        }
    }, [anotherNumber])

    //Cleanup do use effect
    // useEffect(() => {
    //     const time = setTimeout(() => {
    //         console.log('Olá Mundo!')
    //         setAnotherNumber(anotherNumber + 1)
    //     }, 2000)

    //     return () => clearTimeout(time)

    // }, [anotherNumber])

    
    const [number, setNumber] = useState(1)
    const changeSomething = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: { number }</p>
            <button onClick={ changeSomething }>Somar +1</button>
            <p>Número Anotado: { anotherNumber }</p>
            <button onClick={ () => setAnotherNumber(anotherNumber + 1) }>Mudar número</button>
            <hr />
        </div>
  )
}

export default HookUseEffect
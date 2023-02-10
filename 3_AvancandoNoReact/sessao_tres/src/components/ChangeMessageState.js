import React from 'react'

const ChangeMessageState = ({ handleMessage }) => {
    const message = ['mensagem 1', 'mensagem 2', 'mensagem 3', 'mensagem 4']
    return (
    <div>
        <button onClick={() => handleMessage(message[0])}>1</button>
        <button onClick={() => handleMessage(message[1])}>2</button>
        <button onClick={() => handleMessage(message[2])}>3</button>
        <button onClick={() => handleMessage(message[3])}>4</button>
    </div>
    )
}

export default ChangeMessageState
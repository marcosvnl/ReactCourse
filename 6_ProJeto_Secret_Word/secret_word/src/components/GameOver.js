import './GameOver.css'
import React from 'react'

const GameOver = ({ retry, score }) => {
  return (
    <div>
        <h1>Fim de jogo!</h1>
        <h2>Sua pontuação foi de <span>{ score }</span> pts.</h2>
        <button onClick = { retry }>Reiniciar jogo</button>
    </div>
  )
}

export default GameOver
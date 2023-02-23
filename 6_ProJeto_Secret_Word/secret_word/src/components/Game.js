import './Game.css'
import { useState, useRef } from 'react'

const Game = ({
    verifyLetter, 
    pickedWord,
    pickeCategory,
    letters,
    guesseLetters,
    wrogLetters,
    guesses,
    score
}) => {
    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter)
        setLetter('')
        letterInputRef.current.focus()
    }
    return (
    <div>
        <div className="game">
            <p className="points">
                <span>Pontuação: { score }</span>
            </p>
            <h1>Advinhe a palavra: </h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{ pickeCategory }</span>
            </h3>
            <p>Você tem { guesses } tentativas(s).</p>
            <div className="wordContainer">
                {
                    letters.map((letter, i) => 
                        guesseLetters.includes(letter) ? (
                        <span key={ i } className="letter">{ letter }</span>
                    ) : (

                        <span key={ i } className="blankSquere"></span>
                    )
                )}
            </div>
            <div className="letterContainer">
                <p>Tente advinhar uma letra da palavra:</p>
                <form onSubmit={ handleSubmit }>
                    <input type='text' name='letter' maxLength='1' required value={ letter } onChange={ (e) => setLetter(e.target.value) } ref={ letterInputRef }/>
                    <button>Jogar</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letra já utilizadas</p>
                {
                    wrogLetters.map((letter, i) => (
                        <span key={ i }>{ letter }, </span>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Game
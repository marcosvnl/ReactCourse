//CSS
import './App.css';
//React
import { useCallback, useState, useEffect } from 'react'
//Data
import { wordsList } from './data/Words' 
//Components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickeCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessdLetters] = useState([])
  const [wrogLetters, setWrogLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)


  const pickWordAndCategory = useCallback(() =>{
    const categories = Object.keys(words)
    //Array de númetos aleatorios dentro do tamanho de categories
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //buscar as paravra dentro do objeto
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }, [words])

  const startGame = useCallback(() =>{
    clearLetterStates()
    const { word, category } = pickWordAndCategory()
    let wordLetter = word.split('')
    wordLetter = wordLetter.map((l) => l.toLowerCase())
    console.log(category, word)
    console.log(wordLetter)
    //alterar status dos states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetter)
    // alterar o estagio do jogo
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  const verifyLetter = (letter) =>{
    const normalizeLetter = letter.toLowerCase()
    //não incluir letras já digitadas
    if (guessedLetters.includes(normalizeLetter) || wrogLetters.includes(normalizeLetter)){
      return
    }
    //trabalhando as tentativas
    if (letters.includes(normalizeLetter)){
      setGuessdLetters((addGuessLetters) => [...addGuessLetters, normalizeLetter])
    }
    else{
      setWrogLetters((addWrongLetters) => [...addWrongLetters, normalizeLetter])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }
  
  const clearLetterStates = () => {
    setGuessdLetters([])
    setWrogLetters([])
  }

  //monitorando as derrotas
  useEffect(() => {
    if (guesses <= 0){
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  //monitorando a pontuação
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    //win condition
    if (guessedLetters.length === uniqueLetters.length){
      //add score
      setScore((actualScore) => (actualScore += 100))
      
      startGame()

      console.log('win')
    }
  }, [guessedLetters, letters, startGame])

  const retry = () =>{
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }
  return (
    <div className="App">
      { gameStage === 'start' && <StartScreen startGame = { startGame }/> }
      { 
        gameStage === 'game' && 
          <Game 
          verifyLetter = { verifyLetter }
          pickedWord = { pickedWord }
          pickeCategory = { pickeCategory }
          letters = { letters }
          guesseLetters = { guessedLetters }
          wrogLetters = { wrogLetters }
          guesses = { guesses }
          score = { score }
          /> }
      { gameStage === 'end' && 
        <GameOver 
          retry = { retry }
          score = { score }
          
        /> }
    </div>
  );
}

export default App;

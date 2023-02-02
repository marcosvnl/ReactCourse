const a = 5
const b = 10

const ChallengeComponent = () => {
    
    return (
    <div>
        <h1>Vou somar oq eu tenho aqui!</h1>
        <p>{a} + {b}</p>
        <button onClick={ () => console.log(a + b) }>Somar</button>
    </div>
    )
}

export default ChallengeComponent
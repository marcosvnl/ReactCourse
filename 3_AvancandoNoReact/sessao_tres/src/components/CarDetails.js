const CarDetails = ({id, brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul key={id}>
            <li>Marca: { brand }</li>
            <li>KM:    { km }</li>
            <li>Cor:   { color }</li>
        </ul>
        { newCar && <strong>Carrinho cheirando a novo!!!!</strong> }
    </div>
  )
}

export default CarDetails
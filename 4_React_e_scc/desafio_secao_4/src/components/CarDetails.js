import style from './CarDetails.module.css'

const CarDetails = ({ id, brand, km, color }) => {
  return (
    <div>
      <h3 className = { style.car_id }>Car: {id}</h3>
      <div className = { style.car_details }>
        <p>Cor: {color}</p>
        <p>Marca: {brand}</p>
        <p>Km: {km}</p>
      </div>
    </div>
  )
}

export default CarDetails
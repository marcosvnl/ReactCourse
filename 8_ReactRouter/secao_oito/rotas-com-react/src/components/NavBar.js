import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
       {/* <Link to='/'>Home</Link> 
       <Link to='/about'>Sobre</Link>  */}
       <NavLink to='/'>Home</NavLink> 
       <NavLink to='/about'>Sobre</NavLink>
       {/*Configurara uma condição personalizada:
          <NavLink to='/' className={ ({}) => (isActive ? 'active' : 'no-active') }></NavLink>
       */}
    </nav>
  )
}

export default NavBar
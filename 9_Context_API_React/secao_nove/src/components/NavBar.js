import {NavLink, Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/abount'>About</NavLink>
            <NavLink to='/products'>Product</NavLink>
        </nav>
    </div>
  )
}

export default NavBar
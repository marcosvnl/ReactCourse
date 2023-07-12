import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContect'
import style from './Navbar.module.css'

const Navbar = () => {
    const { user } = useAuthValue()
    const { logout } = useAuthentication()
    
    return (
    <nav className={ style.navbar }>
        <NavLink to='/' className={ style.brand } >
            Moni <span>Blog</span>
        </NavLink>
        <ul className={ style.links_list }>
            <li>
                <NavLink className={ ({ isActive }) => (isActive ? style.active : '') } to='/'>Home</NavLink>
            </li>
            {
                !user && (
                    <>
                        <li>
                            <NavLink className={ ({ isActive }) => (isActive ? style.active : '') } to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => (isActive ? style.active : '') } to='/register'>Cadastrar</NavLink>
                        </li>
                    </>
                )
            }
            {
                user && (
                    <>
                        <li>
                            <NavLink className={ ({ isActive }) => (isActive ? style.active : '') } to='/posts/create'>Novo Post</NavLink>
                        </li>
                        <li>
                            <NavLink className={ ({ isActive }) => (isActive ? style.active : '') } to='/dashboard'>Dashboard</NavLink>
                        </li>
                    </>
                )
            }
            <li>
                <NavLink className={ ({ isActive }) => (isActive ? style.active : '') } to='/about'>Sobre</NavLink>
            </li>
            {
                user && (
                    <li>
                        <button onClick={ logout }>Sair</button>
                    </li>
                )
            }
        </ul>
    </nav>
  )
}

export default Navbar
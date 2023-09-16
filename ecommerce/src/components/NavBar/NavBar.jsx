import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/' id="Title">
            <h2>Ecommerce</h2>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/Leche`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Leche</NavLink>
                <NavLink to={`/category/Queso`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Queso</NavLink>
                <NavLink to={`/category/Mantequilla`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mantequilla</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2>Ecommerce</h2>
            <div>
                <button>Nosotros</button>
                <button>Contáctanos</button>
                <button>Productos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
import'../css/Navbar.css'
import Cartwidget from "./Cartwidget"
const Navbar = () => {

    return(
        <nav className="nav-container">
           <a href="">Productos</a>
           <a href="">Servicios</a>
           <a href="">Contacto</a>
           <Cartwidget counter={2} />
        </nav>
    )
}

export default Navbar
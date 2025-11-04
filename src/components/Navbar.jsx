import Cartwidget from "./Cartwidget"
const Navbar = () => {

    return(
        <nav>
        <a href="">Productos</a>
        <a href="">Servicios</a>
        <a href="">Contacto</a>
        <Cartwidget counter={2} />
        </nav>
    )
}

export default Navbar
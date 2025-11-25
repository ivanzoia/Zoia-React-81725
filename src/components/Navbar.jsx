import'../css/Navbar.css'
import Cartwidget from "./Cartwidget"
const Navbar = () => {
 console.log ('soy el nabvar')
    return(
        <nav className="nav-container">
            <a class='anchor-nav' href="">
                <img src="../Aiakos blanco sin fondo.png" alt="logo" className='logo' />
            </a>
           <a class='anchor-nav' href="">Productos</a>
           <a class='anchor-nav' href="">Servicios</a>
           <a class='anchor-nav' href="">Ofertas</a>
           <a  class='anchor-nav'href="">Contacto</a>
           <Cartwidget className='anchor-nav' counter={2} />
        </nav>
    )
}

export default Navbar
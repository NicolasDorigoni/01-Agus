// import {Link} from 'react-router-dom'
// import imagen from '/Users/dori_/Desktop/proyectos/01-agus/src/img/img1.png'

function Header() {
    return (
        <header>
            <div>
                {/* <img src={imagen} alt="baner"></img> */}
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a  href="#">INICIO</a>
                        </li>
                        <li className="separador">-</li>
                        <li className="nav-item">
                            <a  href="#">PEREGRINACIÓN</a>
                        </li>
                        <li className="separador">-</li>
                        <li className="nav-item">
                            <a  href="#">CULTURAL</a>
                        </li>
                        <li className="separador">-</li>
                        <li className="nav-item">
                            <a  href="#">EXÓTICO</a>
                        </li>
                        <li className="separador">-</li>
                        <li className="nav-item">
                            <a  href="#">INFORMACIÓN</a>
                        </li>
                        <li className="separador">-</li>
                        <li className="nav-item">
                            <a  href="#">NOSOTROS</a>
                        </li>
                        <li className="separador">-</li>
                        <li className="nav-item">
                            <a  href="#">CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
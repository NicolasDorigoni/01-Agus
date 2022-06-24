import imagen from '/Users/dori_/Desktop/proyectos/01-agus/src/img/logopiedepagina.svg'

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';


function Footer() {
    return (
        <footer>
            <div className="columnas">
                <div className="logo col-1">
                    <ul>
                        <div className='imgpiepadre'><img src={imagen} alt="pie de pag" className='imgpie'></img></div>
                        <p>Siguenos en nuestras redes sociales para vivir la experiencia de los viajes.</p>
                        <div className='iconos'>
                            <div className='instagram'><FaInstagram/></div>
                            <div className='facebook'><FaFacebookSquare/></div>
                        </div>
                    </ul>
                </div>

                <div className="entradas col">
                    <h4>Entradas</h4>
                    <ul>
                        <li><a>Quienes somos</a></li>
                        <li><a>Quienes somos</a></li>
                        <li><a>Quienes somos</a></li>
                        <li><a>Quienes somos</a></li>
                        <li><a>Quienes somos</a></li>
                        <li><a>Quienes somos</a></li>
                    </ul>
                </div>

                <div className="prodctos col">
                    <h4>Productos</h4>
                    <ul>
                        <li><a>Quienes somos</a></li>
                        <li><a>Quienes somos</a></li>
                    </ul>
                </div>

                <div className="contacto col">
                    <h4>Email</h4>
                    <p>email@email.com</p>
                    <h4>Telefono</h4>
                    <p>12345677899</p>
                </div>
            </div>
            <hr></hr>
            <div className='copyright'>
            <p>Copyright All Reserved Viaja, vuela, vive | Todos los derechos reservados</p>
            </div>
      

        </footer>
    )
}

export default Footer;
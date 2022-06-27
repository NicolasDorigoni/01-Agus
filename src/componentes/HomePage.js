import imagen1 from '/Users/dori_/Desktop/proyectos/01-agus/src/img/img02.png'
import banner2 from '/Users/dori_/Desktop/proyectos/01-agus/src/img/banner2.png'
import banner3 from '/Users/dori_/Desktop/proyectos/01-agus/src/img/banner3.png'
import paisaje1 from '/Users/dori_/Desktop/proyectos/01-agus/src/img/Grecia.jpg'
import testigo1 from '/Users/dori_/Desktop/proyectos/01-agus/src/img/nosotros2.jpg'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import '../css/Homepage.css'


const HomePage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        }, []);
    return (
        <>
        

            <div className='titulo01'>
                <div className="titulo1">
                    <h1>¿Qué tipo de viaje deseas hacer?</h1>
                </div>
                <hr className='separador1'></hr>
            </div>

            <div className="baners">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="baner1 primero">
                    <h3>PEREGRINACIÓN</h3>
                    <p>Peregrinaciones católicas a destinos santos.</p>
                    <div className='baner1padre'><img src={paisaje1} alt="paisaje1" className='baner1hijo'></img></div>
                    <button>+ INFO.</button>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="baner1 segundo">
                    <h3>CULTURAL</h3>
                    <p>Peregrinaciones católicas a destinos santos.</p>
                    <div className='baner1padre'><img src={paisaje1} alt="paisaje1" className='baner1hijo'></img></div>
                    <button>+ INFO.</button>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="baner1 tercero ">
                    <h3>EXÓTICO</h3>
                    <p>Peregrinaciones católicas a destinos santos.</p>
                    <div className='baner1padre'><img src={paisaje1} alt="paisaje1" className='baner1hijo'></img></div>
                    <button>+ INFO.</button>
                </div>
            </div>

            <div className="banner02">
                <div className='banner02padre'><img src={banner2} alt="baner1" className='banner02hijo'></img>
                </div>
            </div>

            <div className='titulo02'>
                <div className="titulo2">
                    <h2>Salidas programadas 2022</h2>
                </div>
                <hr className='separador2'></hr>
            </div>

            <div className='planes'>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='plan'>
                    <h3>EUROPA DEL ESTE</h3>
                    <div className='plan1padre'><img src={paisaje1} alt="paisaje1" className='plan1hijo'></img></div>
                    <p className='mes'>Agosto</p>
                    <p>Berlín, Poznam, Varsovia, Cestochowa, Wadowice, Cracovis, Lagiewniki, Praga, Brno, Abadia de Melk, Budapest, Esztergom.</p>
                    <button>+ INFO.</button>
                </div>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='plan'>
                    <h3>EUROPA DEL ESTE</h3>
                    <div className='plan1padre'><img src={paisaje1} alt="paisaje1" className='plan1hijo'></img></div>
                    <p className='mes'>Agosto</p>
                    <p>Berlín, Poznam, Varsovia, Cestochowa, Wadowice, Cracovis, Lagiewniki, Praga, Brno, Abadia de Melk, Budapest, Esztergom.</p>
                    <button>+ INFO.</button>
                </div>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='plan'>
                    <h3>EUROPA DEL ESTE</h3>
                    <div className='plan1padre'><img src={paisaje1} alt="paisaje1" className='plan1hijo'></img></div>
                    <p className='mes'>Agosto</p>
                    <p>Berlín, Poznam, Varsovia, Cestochowa, Wadowice, Cracovis, Lagiewniki, Praga, Brno, Abadia de Melk, Budapest, Esztergom.</p>
                    <button>+ INFO.</button>
                </div>
            </div>

            <div className='porqueviajar'>
                <h1>¿Por qué viajar con Viaja Vuela Vive?</h1>
                <div className='porqueviajar1'>
                    <div className='pqv'>
                        <h3>Calidad en servicio</h3>
                        <p>Gestionamos todos los elementos que intervienen en el viaje y el en proceso de prestación de servicio, para satisfacer las expectativas.</p>
                    </div>
                    <div className='pqv'>
                        <h3>Atención personalizada</h3>
                        <p>Gestionamos todos los elementos que intervienen en el viaje y el en proceso de prestación de servicio, para satisfacer las expectativas.</p>
                    </div>
                    <div className='pqv'>
                        <h3>Asistencia total</h3>
                        <p>Gestionamos todos los elementos que intervienen en el viaje y el en proceso de prestación de servicio, para satisfacer las expectativas.</p>
                    </div>
                </div>
            </div>

            <div className='titulo02'>
                <div className="titulo2">
                    <h2>¡Ellos ya confiaron en nosotros!</h2>
                </div>
                <hr className='separador2'></hr>
            </div>

            <div className='testimonios'>
                <div className='testimonio'>
                    <img src={testigo1} width="150" alt="Juan"></img>
                    <h3>Nombre</h3>
                    <p>Sin lugar a duda, una muy buena agencia. Cordialidad, profesionalismo y calidez.</p>
                </div>
                <div className='testimonio'>
                    <img src={testigo1} width="150" alt="Juan"></img>
                    <h3>Nombre</h3>
                    <p>Sin lugar a duda, una muy buena agencia. Cordialidad, profesionalismo y calidez.</p>
                </div>
                <div className='testimonio'>
                    <img src={testigo1} width="150" alt="Juan"></img>
                    <h3>Nombre</h3>
                    <p>Sin lugar a duda, una muy buena agencia. Cordialidad, profesionalismo y calidez.</p>
                </div>
            </div>


            <div className="banner02">
                <div className='banner02padre'><img src={banner3} alt="baner1" className='banner02hijo'></img>
                </div>
            </div>


        </>
    );
}

export default HomePage;
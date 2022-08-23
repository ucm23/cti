import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic';
import { HiLocationMarker, HiMail, HiPhoneOutgoing } from 'react-icons/hi'

const Mapa = dynamic(() => import("../components/Mapa"),{ 
    ssr: false 
})

const Contacto = () => {

  return (
    <Layout>
        <header className='contacto-header'>
            {/* Barra de navegación */}
            <Navbar />

            {/* Encabezado */}
            <section className="hero_container container">
                <Fade direction="right">
                    <h1 className="hero_title">Contacto</h1>
                </Fade>
            </section>
        </header>

        <section className="area-mapa contenedor">
            <Mapa />
            <div className="area-contacto">
                <div className="contacto-cont">
                    <div className="contacto1">
                        <div className="contacto_logo">
                            <HiLocationMarker className="contacto_ico contacto_HiLocationMarker" />
                        </div>
                        <div className="contacto_texto">
                            <div className="contacto_titulo">
                                Ubicación
                            </div>
                            <div className="contacto_parrafo">
                                Av. Ejército Nacional 769, 769, piso 2. Col. Granada C.P. 11520
                            </div>
                        </div>
                    </div>
                    <div className="contacto1">
                        <div className="contacto_logo">
                          <HiMail className="contacto_ico contacto_HiMail" />
                        </div>
                        <div className="contacto_texto">
                            <div className="contacto_titulo">
                                Correo
                            </div>
                            <div className="contacto_parrafo">
                                contacto@consultores cti.com.mx <br /> gsamano@orbnote.com
                            </div>
                        </div>
                    </div>
                    <div className="contacto1">
                        <div className="contacto_logo">
                            <HiPhoneOutgoing className="contacto_ico contacto_HiPhoneOutgoing" />
                        </div>
                        <div className="contacto_texto">
                            <div className="contacto_titulo">
                                Teléfono
                            </div>
                            <div className="contacto_parrafo">
                                811 588 03 05 <br /> 55 54 54 76 22
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </Layout>
  )
}

export default Contacto
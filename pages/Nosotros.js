import { Fade } from 'react-awesome-reveal'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

const Nosotros = () => {
    return (
        <Layout>
            <header className='about'>
              {/* Barra de navegación */}
              <Navbar />

              {/* Encabezado */}
              <section className="hero_container container">
                  <Fade direction="right">
                      <h1 className="hero_title">
                          ¿Quiénes somos?
                      </h1>
                  </Fade>
              </section>
            </header>

            <section className='bg-nosotros'>
              <section className='nosotros'>
                  <section className='nosotros-texto'>
                      <h1 className='nosotros-titulo'>Grupo CTI Tech-IN POS</h1>
                      <p className='nosotros-text'>Somos un equipo multidisciplinario con más de 20 años de experiencia en servicios de consultoría especializada en: Seguridad Informática, Virtualización, Soporte Técnico, Infraestructura, Análisis y Diseño de Procesos, Políticas, Registro de Propiedad Intelectual y Desarrollo de Software agrandes corporativos de los sectores: financiero, manufactura, construcción, farmacéutico, automotriz, hospitalario, educativo y gobierno. Además contamos con Plataformas TI propias.</p>
                  </section>
                  <section>
                      <Image
                          src="/Person_Image.svg"
                          alt="Picture of the author"
                          width={520}
                          height={520}
                      />
                  </section>
              </section>
            </section>

            <section className='mis-vis'>
                <section className='bloques-mis'>
                    <div className='vis'>
                        <h1>Visión</h1>
                        <p> Ser el aliado estratégico en Tecnología, que nos permita posicionarnos como el principal referente en soluciones IT y ciberseguridad en México, Estados Unidos, Centro y Sur de América.</p>
                    </div>
                    <div className='mis'>
                        <h1>Misión</h1>
                        <p>Creamos relaciones de confianza y profesionalismo que nos permite pensar como un solo equipo entre nuestros colaboradores, clientes, socios, mayoristas y fabricantes para contribuir en la innovación y desarrollo tecnológico.</p>
                    </div>
                </section>
            </section>

            <Footer />
        </Layout>
    )
}

export default Nosotros
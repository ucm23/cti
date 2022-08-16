import { Fade } from 'react-awesome-reveal'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Image from 'next/image'

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
                      <h1>Grupo CTI Tech-IN POS</h1>
                      <p>Somos un equipo multidisciplinario con más de 20 años de
                        experiencia en servicios de consultoría especializada en:
                        Seguridad Informática, Virtualización, Soporte Técnico,
                        Infraestructura, Análisis y Diseño de Procesos, Políticas,
                        Registro de Propiedad Intelectual y Desarrollo de Software a
                        grandes corporativos de los sectores: financiero,
                        manufactura, construcción, farmacéutico, automotriz,
                        hospitalario, educativo y gobierno. Además contamos con
                        Plataformas TI propias.</p>
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
        </Layout>
    )
}

export default Nosotros
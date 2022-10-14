import { FcWorkflow, FcApproval, FcFlowChart, FcBriefcase } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const Nosotros = () => {
    return (
        <Layout>
            <header className='about-header'>
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
                <section className='d-flex overhid'>
                    <section className='nosotros-texto'>
                        <Fade direction="right">
                            <h1 className='nosotros-titulo'>Grupo CTI Tech-IN POS</h1>
                            <p className='nosotros-text'>Somos un equipo multidisciplinario con más de 20 años de experiencia en servicios de consultoría especializada en: Seguridad Informática, Virtualización, Soporte Técnico, Infraestructura, Análisis y Diseño de Procesos, Políticas, Registro de Propiedad Intelectual y Desarrollo de Software agrandes corporativos de los sectores: financiero, manufactura, construcción, farmacéutico, automotriz, hospitalario, educativo y gobierno. Además contamos con Plataformas TI propias.</p>
                        </Fade>
                    </section>
                    <Fade direction="left">
                        <section className='cti_person'>
                            <Image
                                src="/Person_Image.svg"
                                alt="Negocios en CTI"
                                width={520}
                                height={520}                           
                            />
                        </section>
                    </Fade>
                </section>
            </section>

            <section className='mis-vis'>
                <section className='bloques-mis'>
                    <Fade direction="down">
                        <div className='vis'>
                            <h1>Visión</h1>
                            <p>Ser el aliado estratégico en Tecnología, que nos permita posicionarnos como el principal referente en soluciones IT y ciberseguridad en México, Estados Unidos, Centro y Sur de América.</p>
                        </div>
                    </Fade>
                    <Fade direction="up">
                        <div className='mis'>
                            <h1>Misión</h1>
                            <p>Creamos relaciones de confianza y profesionalismo que nos permite pensar como un solo equipo entre nuestros colaboradores, clientes, socios, mayoristas y fabricantes para contribuir en la innovación y desarrollo tecnológico.</p>
                        </div>
                    </Fade>
                </section>
            </section>

            <section className='my-25'>
                <section className='contenedor diferencia'>
                    <h1 className='titulo-diferencia'>¿Cómo hacemos la diferencia?</h1>
                    <div className='texto-diferencia overhid'>
                        <Fade direction="left">
                            <div className='p-dif'>
                                <FcBriefcase className='icon-dif' />
                                <p>Tenemos pasión por lo que hacemos.</p>
                            </div>
                        </Fade>
                        <Fade direction="down">
                            <div className='p-dif'>
                                <FcWorkflow className='icon-dif' />
                                <p>Creamos buenas relaciones para tener buenos negocios.</p>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className='p-dif'>
                                <FcFlowChart className='icon-dif' />
                                <p>Impulsamos el desarrollo personal y profesional.</p>
                            </div>
                        </Fade>
                        <Fade direction="right">
                            <div className='p-dif'>
                                <FcApproval className='icon-dif' />
                                <p>Nos enfocamos en resultados que nuestros clientes esperan.</p>
                            </div>
                        </Fade>
                    </div>
                </section>
            </section>

        </Layout>
    )
}

export default Nosotros
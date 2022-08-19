import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic';

const Mapa = dynamic(
  () => import("../components/Mapa"),
  { ssr: false }
)

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

        <Mapa />

        <Footer />
    </Layout>
  )
}

export default Contacto
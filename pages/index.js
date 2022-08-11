import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { services, works } from '../lib/services'
import Service from '../components/Service';
import Work from '../components/Work';
import { Stack} from '@mui/material';
import { ColorButton } from '../lib/theme';
import { useRouter } from 'next/router'
import { MdExpandMore } from 'react-icons/md';

const index = () => {
    const { push } = useRouter();

    const handleSubmit = () => {
        push('/Blog');    
    }

    return (
    <Layout>
        <header className='hero'>
            {/* Barra de navegación */}
            <Navbar />

            {/* Encabezado */}
            <section className="hero_container container">
                <h1 className="hero_title">
                    Grupo CTI<br />Tech-IN POS
                </h1>
                <p className="hero_texto">
                    Tu mejor aliado tecnológico.
                </p>

                <Stack spacing={3} direction="row">
                    <ColorButton onClick={ handleSubmit } size='large' variant="contained" className='mx-auto mb-4' endIcon={<MdExpandMore className='ml-2' />}>Leer Más</ColorButton>
                </Stack>

            </section>
        </header>

        {/* Bienvenida */}
        <section>
            <section className='containerWP'>
                <div className='bienvenida'>
                    <h1 className='bienvenida_titulo'>Bienvenidos</h1>
                    <p className='bienvenida_texto'>Grupo CTI Tech-IN POS es una empresa que se creo en el año 2001 con el objetivo de vender Hardware, Software y Servicios de Tecnología, ofrecemos un servicio y atención personalizada acorde a las necesidades de nuestros clientes, con una oferta competitiva y de valor en conjunto con nuestros socios de negocios.</p>    
                </div>
                <img 
                    className='img_bienvenida'
                    src='/about.jpg'
                    alt='Bienvenida al grupo CTI' />
                <div className='years'>
                    <div className='year'>
                        <h1 className='year-title'>12</h1>
                        <p className='year-text'>Años de experiencia</p>
                    </div>
                </div>
            </section>
        </section>

        {/* Servicios */}
        <section className='bg-servicios'>
            <section className='containerWP servi'>
                <h1 className='servicios-titulo'>Servicios</h1>
                <div className='tarjetas'>
                    {
                        services.map(({titulo, descrip, icono},i) =>{
                            return(
                                <Service
                                    key={i}
                                    titulo={titulo}
                                    descrip={descrip}
                                    icono={icono}
                                />
                            )
                        })
                    }        
                </div>
            </section>
        </section>

        {/* Trabajos Recientes */}
        <section>
            <section className='containerWP servi'>
                <h1 className='trabajos-titulo'>Trabajos Recientes</h1>
                <div className='tarjetas'>
                    {
                        works.map(({titulo, src}, i) => {
                            return ( 
                                <Work
                                    key={i}
                                    titulo={titulo}
                                    src={src}/>
                            )
                        })
                    }
                </div>
            </section>                  
        </section>
    </Layout>
    )
}

export default index
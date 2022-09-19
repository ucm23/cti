import { MdExpandMore } from 'react-icons/md';
import { Fade } from "react-awesome-reveal";
import { ColorButton } from '../lib/theme';
import { useRouter } from 'next/router'
import { Stack } from '@mui/material';
import { Suspense, useEffect, useState } from 'react'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Work from '../components/Work';
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Service = dynamic(() => import('../components/Service'), {
    suspense: true,
})

const index = () => {
    const { push } = useRouter();
    const [work, setWork] = useState([]);
    const [services, setServices] = useState([]);
    const [cert, setCert] = useState([]);
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        (async ()=>{
            const resWorks = await fetch("/data/work.json")
            const works = await resWorks.json();
            console.log('Hice el fetch de work')
            setWork(works.works)

            const resServices = await fetch("/data/services.json")
            const service = await resServices.json();
            console.log('Hice el fetch de services')
            setServices(service.services)

            const resCert = await fetch("/data/cert.json")
            const cer = await resCert.json();
            console.log('Hice el fetch de cert')
            setCert(cer.cert)

            const resImgs = await fetch("/data/imgs.json")
            const img = await resImgs.json();
            console.log('Hice el fetch de imgs')
            setImgs(img.imgs)
        })()
    }, [])
    
    const handleClick = () => push('/Nosotros');

    return (
        <Layout>
            <header className='hero'>
                {/* Barra de navegación */}
                <Navbar />

                {/* Encabezado */}
                <section 
                    className='hero_container container'>
                    <Fade direction="left">
                        <h1 className="hero_title">
                            Grupo CTI<br />Tech-IN POS
                        </h1>
                    </Fade>
                    <Fade direction="right">
                        <p className="hero_texto">
                            Tu mejor aliado tecnológico.
                        </p>
                    </Fade>

                    <Stack spacing={3} direction="row">
                        <ColorButton onClick={ handleClick } size='large' variant="contained" className='mx-auto mb-4' endIcon={<MdExpandMore className='ml-2' />}>Leer Más</ColorButton>
                    </Stack>

                </section>
            </header>

            {/* Bienvenida */}
            <section>
                <section className='containerWP movilBienv p-10'>
                    <div className='bienvenida'>
                        <Fade direction="left">
                            <h1 className='bienvenida_titulo'>Bienvenidos</h1>
                            <p className='bienvenida_texto'>Grupo CTI Tech-IN POS es una empresa que se creo en el año 2001 con el objetivo de vender Hardware, Software y Servicios de Tecnología, ofrecemos un servicio y atención personalizada acorde a las necesidades de nuestros clientes, con una oferta competitiva y de valor en conjunto con nuestros socios de negocios.</p>    
                        </Fade>
                    </div>
                    <div className='img_bienvenida' style={{ width: 460 }} >
                        <Image
                            src='/about.jpg'
                            width={460}
                            height={510}
                            layout="responsive"
                            alt='Bienvenida al grupo CTI' />
                    </div>
                    {/* <img 
                        className='img_bienvenida'
                        src='/about.jpg'
                        alt='Bienvenida al grupo CTI' /> */}
                    <div className='years'>
                        <div className='year'>
                            <Fade direction="left">
                                <h1 className='year-title'>12</h1>
                                <p className='year-text'>Años de experiencia</p>
                            </Fade>
                        </div>
                    </div>
                </section>
            </section>

            {/* Servicios */}
            <section className='bg-servicios'>
                <section className='containerWP servi'>
                    <h1 className='servicios-titulo'>
                        Servicios
                    </h1>
                    <div className='tarjetas'>
                        <Suspense fallback={'Loading...'}>
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
                        </Suspense>
                    </div>
                </section>
            </section>

            {/* Trabajos Recientes */}
            <section>
                <section className='containerWP servi'>
                    <h1 className='trabajos-titulo'>Trabajos Recientes</h1>
                    <div className='tarjetas'>
                        {
                            work.map(({titulo, src, alt}, i) => {
                                return ( 
                                    <Work
                                        key={i}
                                        titulo={titulo}
                                        src={src}
                                        alt={alt} />
                                )
                            })
                        }
                    </div>
                </section>                  
            </section>

            {/* Carousel de clientes */}
            <section>
                <section className='containerWP d-flex flex-column'>
                    <h1 className='clientes-titulo'>Nuestros Clientes</h1>
                    <h3 className='clientes-subtitulo'>Ellos confian en la cálidad de Grupo CTI Tech-IN POS</h3>
                    <div className="slider">
                        <div className="slide-track">
                            {
                                imgs.map(({src, className, width,heigth, alt},i)=>{
                                    return (
                                        <div className='slide' style={{ width: width }} key={i}>
                                            <Image 
                                                className={className} 
                                                width={width} 
                                                height={heigth} 
                                                layout="responsive" 
                                                src={src} 
                                                alt={alt}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </section>

            <section className='certificacion mt-20'>
                <section className='d-flex cert-center flex-column containe'>
                    <h1 className='text-center'>Nuestras Certificaciones</h1>
                    <div className='d-flex cert-center'>
                        {
                            cert.map(({src, className, alt},i) => {
                                return (
                                    <img 
                                        key={i} 
                                        className={className} 
                                        src={src} 
                                        alt={alt} />
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
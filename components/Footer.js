import {FaFacebookSquare,FaPhoneSquareAlt } from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {HiMail} from 'react-icons/hi';
import {MdLocationOn} from 'react-icons/md'
import {AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className='bg-footer'>
            <section className='footer-container'>
                <div className='footer-blocks'>
                    <div className='footer-block block1'>
                        <p className='block1-title'>CTI Tech-IN POS</p>
                        <div className='icons'>
                            <Link href='#'>
                                <a target='_blank'><FaFacebookSquare /></a>
                            </Link>
                            <Link href='#'>
                                <a target='_blank'><GrInstagram /></a>
                            </Link>
                            <Link href='#'>
                                <a target='_blank'><AiFillLinkedin /></a>
                            </Link>
                            <Link href='#'>
                                <a target='_blank'><AiFillTwitterSquare /></a>
                            </Link> 
                        </div>
                    </div>

                    <div className='footer-block block2'>
                        <Link href='/'>
                            <a>Inicio</a>
                        </Link>
                        <Link href='/Nosotros'>
                            <a>Nosotros</a>
                        </Link>
                        <Link href='/Soluciones'>
                            <a>Soluciones</a>
                        </Link>
                        <Link href='/Blog'>
                            <a>Blog</a>
                        </Link>
                        <Link href='/Contacto'>
                            <a>Contacto</a>
                        </Link>
                    </div>

                    <div className='footer-block block3'>
                        <p className='block3-title'>Servicios</p>
                        <p>Ciberseguridad</p>
                        <p>Aplicaciones Propias</p>
                        <p>Análisis y diseño de sistemas</p>
                        <p>Propiedad intelectual</p>
                        <p>Centro de ciberseguridad</p>
                    </div>

                    <div className='footer-block block4'>
                        <p className='block4-title'>Contactanos</p>

                        <Link href='mailto:contacto@consultores.cti.com.mx'>
                            <a target='_blank' className='footer-cen'>
                                <HiMail className='block4-icon' /><p>contacto@consultores.cti.com.mx</p>
                            </a>
                        </Link>

                        <Link href='tel:811 588 03 05'>
                            <a target='_blank' className='footer-cen'><FaPhoneSquareAlt className='block4-icon' /><p>811 588 03 05</p></a>
                        </Link>

                        <Link href='!#'>
                            <a target='_blank' className='footer-cen'>
                                <MdLocationOn className='block4-icon' />
                                <div className=''>
                                    <p>Av. Ejército Nacional 769, 769, piso</p> 
                                    <p>2. Col. Granada C.P. 11520</p> 
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className='footer-derechos'>
                    <p>© { new Date().getFullYear() } Grupo CTI Tech-IN POS. Todos los derechos reservados.</p>
                    <p>Politica de privacidad</p>
                </div>
            </section>
        </section>
    )
}

export default Footer
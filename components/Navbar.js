import Link from 'next/link';
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";

const Navbar = () => {

    const [estoyMovil, seteEstoyMovil] = useState(false)

    return (
        estoyMovil ? (
            <Bar
                temp={true}
                seteEstoyMovil={seteEstoyMovil}
            />
        ) : (
            <Fade direction="down">     
                <Bar 
                    temp={false}
                    seteEstoyMovil={seteEstoyMovil}
                />
            </Fade>
        )    
    )
}

const Bar = ({ seteEstoyMovil, temp}) => {

    const [navMobile, setNavMobile] = useState(temp)

    const handleNav = () =>{
        setNavMobile(!navMobile)
        seteEstoyMovil(!navMobile)
    }

    return (
        <nav className="nav container">
                <Link href="/">
                    <a className="nav_logo">
                        <img className='logo_cti' src='/logo.png' alt='Logo grupo CTI TECH_IN POS' />
                        <p className="nav_title"> Grupo CTI</p>
                    </a>
                </Link>

                <ul className={navMobile?'nav_mobile nav__link--show':'nav_link nav_link_menu'} >
                    <img onClick={handleNav} src="/close.svg" className="nav_close" />
                    <li className="nav_items">
                        <Link href="/">
                            <a className="nav_links">Inicio</a>
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link href="/Nosotros" >
                            <a className="nav_links">Nosotros</a>
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link href="/Soluciones">
                            <a className="nav_links">Soluciones</a>
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link href="/Blog">
                            <a className="nav_links">Blog</a>
                        </Link>
                    </li>
                    <li className="nav_items">
                        <Link href="/Contacto">
                            <a className="nav_links">Contacto</a>
                        </Link>
                    </li>
                    
                </ul>

                <div 
                    className='nav_menu'
                    onClick={handleNav}>
                    <img src="/menu.svg" className="nav_img" />
                </div>      
            </nav>
    )
}

export default Navbar
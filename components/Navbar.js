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

const Bar = ({ seteEstoyMovil, temp }) => {

    const [navMobile, setNavMobile] = useState(temp)
    const [showSubMenu1, setShowSubMenu1] = useState(false)

    const handleNav = () => {
        setNavMobile(!navMobile)
        seteEstoyMovil(!navMobile)
    }
    const handleSubMenu1 = () => setShowSubMenu1(!showSubMenu1)

    return (
        <nav className="nav container">
            <Link href="/">
                <a className="nav_logo">
                    <img className='logo_cti' src='/logo.png' alt='Logo grupo CTI TECH_IN POS' />
                    <p className="nav_title"> Grupo CTI </p>
                </a>
            </Link>
            <p className='title_desc' >Consultores en sistemas de Tráfico e ITS</p>
            <ul className={navMobile ? 'nav_mobile nav__link--show' : 'nav_link nav_link_menu'} >
                <img onClick={handleNav} src="/close.svg" className="nav_close" alt='Cerrar Navbar de Grupo CTI' />
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
                {/*<li className="nav_items">
                    <Link href="/Soluciones">
                        <a className="nav_links">Soluciones</a>
                    </Link>
    </li>*/}
                <li className="nav_items">
                    <a className="nav_links" onClick={handleSubMenu1}>Soluciones</a>
                    {showSubMenu1 &&
                        <ul class={`${!navMobile ? "submenu-top" : "submenu-bottom"}`}>
                            <li className="nav_items">
                                <Link href="/Soluciones">
                                    <a className="nav_links">General</a>
                                </Link>
                            </li>
                            <li className="nav_items">
                                <a className="nav_links">Victum Metrix</a>
                            </li>
                            <li className="nav_items">
                                <a className="nav_links">Victum REPSE</a>
                            </li>
                            <li className="nav_items">
                                <a className="nav_links">Soporte y Mesa de Ayuda</a>
                            </li>
                        </ul>
                    }
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
                <img src="/menu.svg" className="nav_img" alt='Menu hamburgesa el Navbar' />
            </div>
        </nav>
    )
}

export default Navbar
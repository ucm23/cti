import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
    return (
        <Fade direction="down">
            <nav className="nav container">
                <Link href="/">
                <a className="nav_logo">
                    <img className='logo_cti' src='/logo.png' alt='Logo grupo CTI TECH_IN POS' />
                    <p className="nav_title"> Grupo CTI</p>
                </a>
                </Link>

                <ul className="nav_link nav_link_menu">
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
                    <img src="/close.svg" className="nav_close" />
                </ul>

                <div className="nav_menu">
                    <img src="/menu.svg" className="nav_img" />
                </div>
            </nav>
        </Fade>
    )
}

export default Navbar
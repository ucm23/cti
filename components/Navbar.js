import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav className="nav container">
            <div className="nav_logo">
                <p className="nav_title">Grupo CTI</p>
            </div>

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
    </div>
  )
}

export default Navbar
import { Link, Outlet } from 'react-router-dom'
import { Fragment } from "react";

const NavBar = () => {

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-light border-bottom border-dark border-1">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-2">
                                <Link className="nav-link" aria-current="page" to="/"><strong>Modo: Estandar</strong></Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link className="nav-link" to="modo/tresParaGanar"><strong>Modo: Tres Para Ganar</strong></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <strong>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={"/usuarios/" + globalThis.usuario}
                  replace
                >
                  Inicio
                </Link>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={"/series/A"}
                  replace
                >
                  Agregar Serie
                </Link>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={"/usuarios/" + globalThis.usuario + "/facturas"}
                  replace
                >
                  Ver Cargos
                </Link>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

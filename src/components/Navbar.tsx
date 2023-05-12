import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <strong>
                <a className="nav-link" aria-current="page" href="/">
                  Inicio
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link" aria-current="page" href="series">
                  Agregar Serie
                </a>
              </strong>
            </li>
            <li className="nav-item">
              <strong>
                <a className="nav-link" aria-current="page" href="facturas">
                  Ver Cargos
                </a>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

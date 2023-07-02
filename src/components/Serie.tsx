import { Link, useLocation, useParams } from "react-router-dom";
import NavegadorIniciales from "./NavegadorIniciales";
import Temporada from "./Temporada";
import { useState } from "react";

const Serie = () => {
  const location = useLocation();
  const { serie } = location.state;
  const [temporada, setTemporada] = useState(1);

  const retrocederTemporada = () => {
    if (temporada > 1) setTemporada(temporada - 1);
  };

  const avanzarTemporada = () => {
    if (serie.temporadas.length > temporada) setTemporada(temporada + 1);
  };

  return (
    <>
      <div>
        <h1>{serie.info.titulo}</h1>
        <ul className="nav justify-content-center">
          <li className="nav-link">
            <a
              aria-label="Previous"
              onClick={retrocederTemporada}
              style={{ cursor: "pointer" }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="nav-link" style={{ color: "black" }}>
            <Temporada
              t={serie.temporadas[temporada - 1]}
              s={serie.info}
            ></Temporada>
          </li>
          <li className="nav-link">
            <a
              aria-label="Next"
              onClick={avanzarTemporada}
              style={{ cursor: "pointer" }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Serie;

import { useLocation } from "react-router-dom";
import Temporada from "./Temporada";
import { useEffect, useState } from "react";
import { getCapitulosVistos } from "../api/getCapitulosVistos";

const Serie = () => {
  const location = useLocation();
  const { serie } = location.state;
  const [temporada, setTemporada] = useState(1);
  const [capitulosVistos, setCapitulosVistos] = useState<number[]>([]);

  const retrocederTemporada = () => {
    if (temporada > 1) setTemporada(temporada - 1);
  };

  const avanzarTemporada = () => {
    if (serie.temporadas.length > temporada) setTemporada(temporada + 1);
  };

  //Para Devolver los capitulos vistos
  useEffect(() => {
    // <Loading/>
    getCapitulosVistos(globalThis.usuario).then((data) =>
      setCapitulosVistos(data)
    );
  }, []);

  return (
    <>
      <div>
        <h1 style={{ justifyContent: "center", display: "flex" }}>
          {serie.info.titulo}
        </h1>
        <ul className="nav justify-content-center">
          <li className="nav-link">
            <a
              aria-label="Previous"
              onClick={retrocederTemporada}
              style={{ cursor: "pointer" }}
            >
              <span
                aria-hidden="true"
                style={{ userSelect: "none", fontSize: 50 }}
              >
                &laquo;
              </span>
            </a>
          </li>

          <li className="nav-link" style={{ color: "black" }}>
            <Temporada
              t={serie.temporadas[temporada - 1]}
              s={serie.info}
              cv={capitulosVistos}
            ></Temporada>
          </li>

          <li className="nav-link">
            <a
              aria-label="Next"
              onClick={avanzarTemporada}
              style={{ cursor: "pointer" }}
            >
              <span
                aria-hidden="true"
                style={{ userSelect: "none", fontSize: 50 }}
              >
                &raquo;
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Serie;

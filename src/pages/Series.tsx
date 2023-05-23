import InfoSerie from "../components/InfoSerie";
import { SeriesAPI } from "../api/SeriesAPI";
import { useEffect, useState } from "react";
import { getSeries } from "../api/getCatalogo";
import { putAnadirSerie } from "../api/putAnadirSerie";

const Series = () => {
  const letras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0-9",
  ];

  const [series, setSeries] = useState<SeriesAPI[]>();
  const [anadirSerie, setAnadirSerie] = useState<SeriesAPI>();

  const handleSelectSerie = (s: SeriesAPI) => {
    setAnadirSerie(s);
  };

  //Para devolver el catalogo
  useEffect(() => {
    // <Loading/>
    console.log("Loading");
    getSeries().then((data) => setSeries(data));
  }, []);

  //Para comprobar la serie a anadir y hacer el put
  useEffect(() => {
    // <Loading/>
    console.log(anadirSerie?.info.descripcion);
    anadirSerie
      ? putAnadirSerie(anadirSerie).then(() => {
          console.log("Serie añadida");
        })
      : console.log("No añadida");
  }, [anadirSerie]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {letras.map((item, index) => (
                <strong key={index}>
                  <a
                    className="list-group-item nav-link"
                    aria-current="page"
                    href={"series/" + item}
                  >
                    {item}
                  </a>
                </strong>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
      {series?.map((s, index) => (
        <InfoSerie
          key={index}
          serie={s}
          onSelectSerie={handleSelectSerie}
        ></InfoSerie>
      ))}
    </>
  );
};

export default Series;

import InfoSerie from "./InfoSerie";
import { SeriesAPI } from "../api/SeriesAPI";
import { useEffect, useState } from "react";
import { getSeries } from "../api/getCatalogo";
import { putAnadirSerie } from "../api/putAnadirSerie";
import NavegadorIniciales from "./NavegadorIniciales";
import BarraBusqueda from "./BarraBusqueda";

const CatalogoSeries = () => {
  const [series, setSeries] = useState<SeriesAPI[]>();
  const [anadirSerie, setAnadirSerie] = useState<SeriesAPI>();
  const [inicial, setInicial] = useState("A");

  const handleSelectSerie = (s: SeriesAPI) => {
    setAnadirSerie(s);
  };

  //Inicial
  const handleInicial = (inicial: string) => {
    setInicial(inicial);
  };

  //Busqueda
  const handleBusqueda = (busqueda: Event) => {
    console.log(busqueda.target);
  };

  //Para devolver el catalogo
  useEffect(() => {
    // <Loading/>
    getSeries().then((data) => setSeries(data));
  }, []);

  //Para comprobar la serie a anadir y hacer el put
  useEffect(() => {
    // <Loading/>
    anadirSerie
      ? putAnadirSerie(anadirSerie).then(() => {
          console.log("Serie añadida");
        })
      : console.log("No añadida");
  }, [anadirSerie]);

  return (
    <>
      <div
        className="row justify-content-between"
        style={{
          alignItems: "center",
        }}
      >
        <span className="col-auto">
          <NavegadorIniciales onSelectedInicial={handleInicial} />{" "}
        </span>
        <span className="col-auto m-3" style={{ width: "30%" }}>
          <BarraBusqueda onBusqueda={handleBusqueda} />
        </span>
      </div>
      <hr></hr>
      {series?.map(
        (s, index) =>
          s.info.titulo[0] === inicial && (
            <InfoSerie
              key={index}
              serie={s}
              onSelectSerie={handleSelectSerie}
            ></InfoSerie>
          )
      )}
    </>
  );
};

export default CatalogoSeries;

import { useState } from "react";
import Alert from "./Alert";
import { SeriesAPI } from "../api/SeriesAPI";

interface Props {
  serie: SeriesAPI;
  onSelectSerie: (item: SeriesAPI) => void;
}

const InfoSerie = ({ serie, onSelectSerie }: Props) => {
  const [showDescripcion, setShowDescripcion] = useState(false);

  return (
    <>
      <div
        className="row"
        style={{
          alignItems: "center",
        }}
      >
        <h3
          style={{ cursor: "pointer" }}
          className="pe-auto col-auto "
          onClick={() => {
            //Muestra o cierra la info de la serie con el nombre
            console.log(serie);
            !showDescripcion
              ? setShowDescripcion(true)
              : setShowDescripcion(false);
          }}
        >
          {serie.info.titulo}
        </h3>
        <a
          style={{ cursor: "pointer" }}
          className="col-auto"
          onClick={() => {
            //Devuelve la serie
            onSelectSerie(serie);
          }}
        >
          Agregar Serie
        </a>
      </div>
      {showDescripcion && (
        <Alert
          onClose={() => {
            //Cierra la descripcion
            setShowDescripcion(false);
          }}
        >
          {serie.info.descripcion}
          <br />
          Creadores:
          {" " + serie.info.creadores}
          <br />
          Actores:
          {" " + serie.info.actores}
        </Alert>
      )}
    </>
  );
};

export default InfoSerie;

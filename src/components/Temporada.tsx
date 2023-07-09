import { Capitulos, InfoSerie, SeriesAPI, Temporadas } from "../api/SeriesAPI";
import { useEffect, useState } from "react";
import { putMarcarCapituloVisto } from "../api/putMarcarCapituloVisto";

interface Props {
  t: Temporadas;
  s: InfoSerie;
  cv: number[];
}

const Temporada = ({ s, t, cv }: Props) => {
  const [anadirCap, setAnadirCap] = useState<Capitulos>();

  const onVerCapitulo = (c: Capitulos) => {
    setAnadirCap(c);
    cv.push(c.idCapitulo);
  };

  //realizar la llamada y añadir capitulo
  useEffect(() => {
    // <Loading/>
    anadirCap
      ? putMarcarCapituloVisto(s, t.numero, anadirCap).then(() => {})
      : console.log("Error");
  }, [anadirCap]);

  return (
    <>
      <div className="justify-content-center" style={{ alignItems: "center" }}>
        <h1 style={{ justifyContent: "center", display: "flex" }}>
          {t.numero}
        </h1>
        <ul>
          {t.capitulos.map((c, index) => (
            <div key={index} style={{ display: "flex ", alignItems: "center" }}>
              <h2 style={{ marginRight: "10px" }}>
                {c.numero + " - " + c.titulo}
              </h2>
              <a
                style={{ cursor: "pointer", marginLeft: "10px" }}
                className="col-auto"
                onClick={() => {
                  //Devuelve el capitulo seleccionado
                  onVerCapitulo(c);
                }}
              >
                Ver capitulo
              </a>
              {
                //Aqui se hace la comprobacion de un capitulo visto
                cv.includes(c.idCapitulo) ? (
                  <h5 style={{ marginLeft: "10px" }}>Visto</h5>
                ) : (
                  <h5 style={{ marginLeft: "10px" }}>Pendiente</h5>
                )
              }
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Temporada;

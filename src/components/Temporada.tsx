import { Link } from "react-router-dom";
import { Capitulos, InfoSerie, SeriesAPI, Temporadas } from "../api/SeriesAPI";
import { useEffect, useState } from "react";
import { putMarcarCapituloVisto } from "../api/putMarcarCapituloVisto";

interface Props {
  t: Temporadas;
  s: InfoSerie;
}

const Temporada = ({ s, t }: Props) => {
  const [anadirCap, setAnadirCap] = useState<Capitulos>();

  const onVerCapitulo = (c: Capitulos) => {
    setAnadirCap(c);
  };
  //realizar la llamada y añadir capitulo
  useEffect(() => {
    // <Loading/>
    anadirCap
      ? putMarcarCapituloVisto(s, t.numero, anadirCap).then(() => {
          console.log("Capitulo visto");
        })
      : console.log("No visto");
  }, [anadirCap]);

  return (
    <>
      <div className="justify-content-center" style={{ alignItems: "center" }}>
        <h1>{t.numero}</h1>
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
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Temporada;

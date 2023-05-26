import { SeriesAPI, Temporadas } from "../api/SeriesAPI";

interface Props {
  t: Temporadas;
}

const Temporada = ({ t }: Props) => {
  return (
    <>
      <div className="justify-content-center" style={{ alignItems: "center" }}>
        <h1>{t.numero}</h1>
        <ul>
          {t.capitulos.map((c, index) => (
            <h2 key={index}>{c.numero + " - " + c.titulo}</h2>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Temporada;

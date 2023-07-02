import { useLocation, useParams } from "react-router-dom";
import NavegadorIniciales from "./NavegadorIniciales";
import Temporada from "./Temporada";

interface Props {
  s: string;
}

const Serie = () => {
  const location = useLocation();
  const { serie } = location.state;

  return (
    <>
      <div>
        <h1>{serie.info.titulo}</h1>
        <Temporada t={serie.temporadas[0]} s={serie.info}></Temporada>
      </div>
    </>
  );
};

export default Serie;

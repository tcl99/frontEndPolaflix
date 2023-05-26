import { useLocation } from "react-router-dom";
import CatalogoSeries from "../components/CatalogoSeries";
import Serie from "../components/Serie";

const Series = () => {
  const location = useLocation();
  const url = location.pathname.split("/");
  const inicial = url[url.length - 1];

  return (
    <>
      {inicial.length == 1 || inicial.match("0-9") ? (
        <CatalogoSeries />
      ) : (
        <Serie />
      )}
    </>
  );
};

export default Series;

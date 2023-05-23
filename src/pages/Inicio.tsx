import React, { useEffect, useState } from "react";
import SeriesInicio from "../components/SeriesInicio";
import Boton from "../components/Boton";
import Alert from "../components/Alert";
import { SeriesAPI } from "../api/SeriesAPI";
import { getInfoSeries } from "../api/getSeriesUsuario";

const Inicio = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [series, setSeries] = useState<SeriesAPI[][]>();

  useEffect(() => {
    // <Loading/>
    console.log("Loading");
    getInfoSeries().then((data) => setSeries(data));
    console.log(series);
  }, []);

  return (
    <>
      <SeriesInicio series={series?.at(0)}>Empezadas</SeriesInicio>
      <SeriesInicio series={series?.at(1)}>Pendientes</SeriesInicio>
      <SeriesInicio series={series?.at(2)}>Terminadas</SeriesInicio>
      <Boton
        onClick={() => {
          setShowAlert(true);
        }}
      >
        Botonaco
      </Boton>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          Socio
        </Alert>
      )}
    </>
  );
};

export default Inicio;

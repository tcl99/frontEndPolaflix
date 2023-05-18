import React, { useEffect, useState } from "react";
import SeriesInicio from "../components/SeriesInicio";
import Boton from "../components/Boton";
import Alert from "../components/Alert";
import { InfoSeriesAPI } from "../api/Cliente";
import { getInfoSeries } from "../api/getInfoSeries";

const Inicio = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [series, setSeries] = useState<InfoSeriesAPI[][]>();

  useEffect(() => {
    // <Loading/>
    console.log("Loading");
    getInfoSeries().then((data) => setSeries(data));
    console.log(series?.at(1));
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

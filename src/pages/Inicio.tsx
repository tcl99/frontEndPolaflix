import React, { useEffect, useState } from "react";
import SeriesInicio from "../components/SeriesInicio";
import { SeriesAPI } from "../api/SeriesAPI";
import { getInfoSeries } from "../api/getSeriesUsuario";

const Inicio = () => {
  const [series, setSeries] = useState<SeriesAPI[][]>();

  useEffect(() => {
    // <Loading/>
    console.log("Loading");
    getInfoSeries().then((data) => setSeries(data));
  }, []);

  return (
    <>
      <SeriesInicio series={series?.at(0)}>Empezadas</SeriesInicio>
      <SeriesInicio series={series?.at(1)}>Pendientes</SeriesInicio>
      <SeriesInicio series={series?.at(2)}>Terminadas</SeriesInicio>
    </>
  );
};

export default Inicio;

import React, { useState } from "react";
import SeriesInicio from "../components/SeriesInicio";
import Boton from "../components/Boton";
import Alert from "../components/Alert";

const Inicio = () => {
  let oasis = ["Some Might Say", "Acquiesce", "Live Forever", "Slide Away"];
  let f1 = ["Aston", "Ferrari", "Mercedes", "Williams", "McLaren"];

  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnButtonCliked = () => {
    console.log("Buenas");
  };

  return (
    <>
      <SeriesInicio items={oasis}>Empezadas</SeriesInicio>
      <SeriesInicio items={oasis}>Pendientes</SeriesInicio>
      <SeriesInicio items={oasis}>Terminadas</SeriesInicio>
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

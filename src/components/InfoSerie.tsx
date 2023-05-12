import { useState } from "react";
import Alert from "./Alert";

interface Props {
  titulo: string;
  descripcion?: string;
}

const InfoSerie = ({ titulo, descripcion }: Props) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <div
        className="row"
        style={{
          alignItems: "center",
        }}
      >
        <h3
          className="col-auto"
          onClick={() => {
            setShowAlert(true);
          }}
        >
          {titulo}
        </h3>
        <a className="col-auto"> Agregar Serie</a>
      </div>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          {descripcion}
        </Alert>
      )}
    </>
  );
};

export default InfoSerie;

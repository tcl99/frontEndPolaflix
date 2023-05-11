import { useState } from "react";
import Alert from "./components/Alert";
import Boton from "./components/Boton";
import GrupoLista from "./components/GrupoLista";

function App() {
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
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          Socio
        </Alert>
      )}
      <Boton
        onClick={() => {
          setShowAlert(true);
        }}
      >
        Botonaco
      </Boton>
    </>
  );
  //Control-d
}

export default App;

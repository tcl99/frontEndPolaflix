import { useState } from "react";
import Alert from "./components/Alert";
import Boton from "./components/Boton";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

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
      <Welcome></Welcome>
      <Navbar></Navbar>
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

//document.body.style.backgroundColor = "lightblue";
document.body.style.backgroundImage =
  "url(https://pacharanelpurriego.com/wp-content/uploads/2019/09/Valle-del-Nansa.jpg)";
export default App;

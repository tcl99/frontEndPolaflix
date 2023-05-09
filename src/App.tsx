import Alert from "./components/Alert";
import GrupoLista from "./components/GrupoLista";

function App() {
  let oasis = ["Some Might Say", "Acquiesce", "Live Forever", "Slide Away"];
  let f1 = ["Aston", "Ferrari", "Mercedes", "Williams", "McLaren"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <GrupoLista
        items={oasis}
        heading="Canciones"
        onSelectItem={handleSelectItem}
      />
      <GrupoLista
        items={f1}
        heading="Escuderias"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Socio <span>sox</span>
      </Alert>
    </>
  );
  //Control-d
}

export default App;

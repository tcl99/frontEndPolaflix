import GrupoLista from "./components/GrupoLista";
import Mensaje from "./components/GrupoLista";
import { MouseEvent } from "react";

function App() {
  let oasis = ["Some Might Say", "Acquiesce", "Live Forever", "Slide Away"];
  // oasis = [];

  //Se puede hacer de dos maneras, las funciones pueden además tener parámetros
  //Si no hay param --> const
  //Si los hay --> funciones
  const msg = oasis.length === 0 && <p>No items</p>;
  //Esto funciona pq en js por ejemplo true && 1 = 1
  // y false && 1 = false
  const getMsg = () => {
    return oasis.length === 0 ? <p>No items</p> : null;
  };

  //type annotation se llama lo de mouseevent
  //Sabemos el tipo porque abajo poniendo el ratón encima
  //lo muestra
  const handleClick = (event: MouseEvent) => console.log(event);

  //No la llamamos, (), simplemente pasamos el nombre, que es la referencia
  //Esto hace que se llame luego en tiempo de ejecución cuando ocurra el evento

  return (
    //Si se aade un h1 por ejemplo da error
    //Un componente no puede devolver más de un elemento
    //Una solucion es meterlo en un div por ej
    //Seleccionar todo  y cshift p wrap element en div

    //Otro modo es utilizar fragment, que es más adecuado
    //se puede poner fragment, pero no es necesario, si se deja vacío
    //El compilador lo entiende como un fragment

    //Función arrow que convierte cada elemento en lo indicado
    //Como no se puede meter en jsx porq solo se pueden meter componentes y html
    //react se mete entre brackets, es necesario poner una key por react que lo necesita
    <>
      <h1>Canciones</h1>
      {getMsg()}
      <ul className="list-group">
        {oasis.map((item, index) => (
          <li className="list-group-oasis" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  // return <div><Mensaje /></div>;
  //Control-d
}

export default App;

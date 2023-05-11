import { MouseEvent } from "react";
import { useState } from "react";

//PROPS: Sirve para pasar info por parámetro a un componente
//INMUTABLE - no se modifican, no son buenas practicas
interface Props {
  //Properties, son los inputs de los compònentes
  items: string[];
  heading: string;
  //Las funciones son como el paso por referencia
  onSelectItem: (item: string) => void;
  //parametros => return
}

//STATE: datos locales del componente
//MUTABLE

function GrupoLista({ items, heading, onSelectItem }: Props) {
  // props = [];
  //useState sirve para decirle a react que las variables cambian con el tiempo
  //selectedIndex es la variable
  //setSelectedIndex funcion que actualiza la variable
  //hay que pensar en componentes con estados y react se encarga de mostarlos cuando se actualiza su estado
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [string, setString] = useState('');

  //Se puede hacer de dos maneras, las funciones pueden además tener parámetros
  //Si no hay param --> const
  //Si los hay --> funciones
  const msg = items.length === 0 && <p>No items</p>;
  //Esto funciona pq en js por ejemplo true && 1 = 1
  // y false && 1 = false
  const getMsg = () => {
    return items.length === 0 ? <p>No items</p> : null;
  };

  //type annotation se llama lo de mouseevent
  //Sabemos el tipo porque abajo poniendo el ratón encima
  //lo muestra
  const handleClick = (event: MouseEvent) => console.log(event);
  //No la llamamos, (), simplemente pasamos el nombre, que es la referencia
  //Esto hace que se llame luego en tiempo de ejecución cuando ocurra el evento

  //No bromear con los nombres de bootstrap
  //"list-group-item active"

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
      <h1>{heading}</h1>
      {msg}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GrupoLista;

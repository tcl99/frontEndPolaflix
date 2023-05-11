import { Children } from "react";

interface Props {
  children: string;
  color?: "info" | "success"; //? la hace opcional
  //esto es para hacer que la variable solo pueda tomar los valores inficados
  //Y asi nos salten los errores de compilacion
  onClick: () => void;
}

const Boton = ({ children, onClick, color = "info" }: Props) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Boton;

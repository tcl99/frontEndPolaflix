import { useState } from "react";

interface Props {
  onBusqueda: (busqueda: any) => void;
}

const BarraBusqueda = ({ onBusqueda }: Props) => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Buscar"
        onChange={(Event) => onBusqueda(Event.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default BarraBusqueda;

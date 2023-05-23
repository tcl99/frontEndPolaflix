import { useEffect, useState } from "react";
import TablaFacturas from "../components/TablaFacturas";
import { FacturasAPI } from "../api/FacturasAPI";
import { getFacturas } from "../api/getFacturasUsuario";
import { format, parseISO } from "date-fns";
import { YearMonth } from "js-joda";

const Facturas = () => {
  const [factura, setFactura] = useState<FacturasAPI>();
  const [fecha, setFecha] = useState(
    YearMonth.parse(format(new Date(), "yyyy-MM"))
  );

  useEffect(() => {
    // <Loading/>
    console.log("Loading");
    getFacturas({ fecha }).then((data) => setFactura(data));
  }, [fecha]);

  const retrocederMes = () => {
    setFactura(undefined);
    setFecha(fecha.minusMonths(1));
  };

  const avanzarMes = () => {
    setFactura(undefined);
    setFecha(fecha.plusMonths(1));
  };

  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-link">
          <a href="#" aria-label="Previous" onClick={retrocederMes}>
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="nav-item">
          <h1>Fecha {fecha.toString()}</h1>
        </li>
        <li className="nav-link">
          <a href="#" aria-label="Next" onClick={avanzarMes}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>

      <input
        className="justify-content-center"
        type="month"
        id="fecha"
        name="fecha"
      ></input>

      <TablaFacturas
        importes={factura?.importes}
        importeMensual={factura?.importeMensual}
      ></TablaFacturas>
    </>
  );
};

export default Facturas;

import { ChangeEvent, useEffect, useState } from "react";
import TablaFacturas from "../components/TablaFacturas";
import { FacturasAPI } from "../api/FacturasAPI";
import { getFacturas } from "../api/getFacturasUsuario";
import { format, parseISO } from "date-fns";
import { YearMonth } from "js-joda";
import { Link } from "react-router-dom";

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

  const calendarioMes = (input: ChangeEvent<HTMLInputElement>) => {
    setFactura(undefined);
    let fecha = input.target.valueAsDate;
    setFecha(YearMonth.parse(format(fecha ? fecha : 0, "yyyy-MM")));
  };

  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-link">
          <Link to="#" aria-label="Previous" onClick={retrocederMes} replace>
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        <li className="nav-item">
          <h1>Fecha {fecha.toString()}</h1>
        </li>
        <li className="nav-link">
          <Link to="#" aria-label="Next" onClick={avanzarMes} replace>
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>

      <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
        <input
          type="month"
          id="fecha"
          name="fecha"
          onChange={calendarioMes}
          value={fecha.toString()}
        ></input>
      </div>

      <TablaFacturas
        importes={factura?.importes}
        importeMensual={factura?.importeMensual}
      ></TablaFacturas>
    </>
  );
};

export default Facturas;

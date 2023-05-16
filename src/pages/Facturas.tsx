import { useEffect, useState } from "react";
import TablaFacturas from "../components/TablaFacturas";
import { FacturasAPI } from "../api/Cliente";
import { getFacturas } from "../api/getFacturas";

const Facturas = () => {
  const [facturas, setFacturas] = useState<FacturasAPI>();

  useEffect(() => {
    // You can implement a <Loading/>
    //  start loading
    console.log("Loading");
    getFacturas().then((data) => setFacturas(data));
    //  finish loading
  }, []);

  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-link">
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="nav-item">
          <h1>MES</h1>
        </li>
        <li className="nav-link">
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <TablaFacturas importes={facturas?.importes}></TablaFacturas>
    </>
  );
};

export default Facturas;

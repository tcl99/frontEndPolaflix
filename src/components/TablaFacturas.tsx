import { FacturasAPI } from "../api/Cliente";

const TablaFacturas = ({ importes }: FacturasAPI) => {
  return (
    <>
      <table
        className="table table-striped table-dark"
        style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
      >
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Serie</th>
            <th scope="col">Episodio</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {importes?.map(({ fecha, serie, episodio, precio }, index) => (
            <tr key={index}>
              <th>{fecha}</th>
              <td>{serie}</td>
              <td>{episodio}</td>
              <td>{precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaFacturas;

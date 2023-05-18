import { FacturasAPI } from "../api/Cliente";

const TablaFacturas = ({ importes, importeMensual }: FacturasAPI) => {
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
          {importes ? (
            importes?.map(
              (
                {
                  cargo,
                  fechaVisualizacion,
                  nCapitulo,
                  nTemporada,
                  nombreSerie,
                },
                index
              ) => (
                <tr key={index}>
                  <th>{fechaVisualizacion}</th>
                  <td>{nombreSerie}</td>
                  <td>{nTemporada + "x" + nCapitulo}</td>
                  <td>{cargo}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <th>No hay importes en este mes</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      <h3>Importe total: {importeMensual ? importeMensual : 0}</h3>
    </>
  );
};

export default TablaFacturas;

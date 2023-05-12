import TablaFacturas from "../components/TablaFacturas";

const Facturas = () => {
  const importes = [
    {
      fecha: "2023-05-13",
      serie: "S01",
      episodio: "E01",
      precio: "10.00",
    },
    {
      fecha: "2023-05-14",
      serie: "S01",
      episodio: "E02",
      precio: "15.00",
    },
  ];

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
      <TablaFacturas importes={importes}></TablaFacturas>
    </>
  );
};

export default Facturas;

import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import InfoSerie from "../components/InfoSerie";

const Series = () => {
  const items = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0-9",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {items.map((item, index) => (
                <strong key={index}>
                  <a
                    className="list-group-item nav-link"
                    aria-current="page"
                    href={"series/" + item}
                  >
                    {item}
                  </a>
                </strong>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>

      <InfoSerie titulo="Dick" descripcion="nononono"></InfoSerie>
      <InfoSerie titulo="Dick 2" descripcion="si"></InfoSerie>
    </>
  );
};

export default Series;

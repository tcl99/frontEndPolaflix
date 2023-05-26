import { Link, useLocation, useNavigate } from "react-router-dom";

//para devolver la letra y filtrar

interface Props {
  onSelectedInicial: (item: string) => void;
}

const NavegadorIniciales = ({ onSelectedInicial }: Props) => {
  const iniciales = [
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

  //estado de la inicial elegida
  const location = useLocation();
  const url = location.pathname.split("/");
  const inicial = url[url.length - 1];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {iniciales.map((item, index) => (
                //Destacar la elegida
                <div key={index} onClick={() => onSelectedInicial(item)}>
                  {inicial === item ? (
                    <strong>
                      <Link
                        className="list-group-item nav-link"
                        aria-current="page"
                        to={"/series/" + item}
                      >
                        {item}
                      </Link>
                    </strong>
                  ) : (
                    <Link
                      className="list-group-item nav-link"
                      aria-current="page"
                      to={"/series/" + item}
                    >
                      {item}
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavegadorIniciales;

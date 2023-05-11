import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="row justify-content-between text-middle">
        <span className="align-center col-auto">
          <a className="navbar-brand">
            <img
              src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/28/16460502314689.jpg"
              width="100"
              height="100"
            />
          </a>
        </span>
        <span className="align-center col-auto ms-auto">
          <a className="navbar-brand">Poladick</a>
        </span>
        <span className="text-center col">
          <h1>Bienvenido Socio</h1>
        </span>
      </div>

      <hr />
    </>
  );
};

export default Welcome;

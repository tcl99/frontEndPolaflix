const Welcome = () => {
  return (
    <>
      <div
        className="row justify-content-between"
        style={{
          alignItems: "center",
        }}
      >
        <span
          className="row col-auto"
          style={{
            alignItems: "center",
            padding: 10,
            marginLeft: 10,
          }}
        >
          <a className="col-auto">
            <img
              className="rounded-circle"
              src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/28/16460502314689.jpg"
              width="100"
              height="100"
            />
          </a>
          <h2 className="col-auto">Polaflix</h2>
        </span>
        <h1 className="col-7">Bienvenido Socio</h1>
      </div>

      <hr />
    </>
  );
};

export default Welcome;

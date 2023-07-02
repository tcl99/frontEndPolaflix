import { Link } from "react-router-dom";
import { SeriesAPI } from "../api/SeriesAPI";
import { useState } from "react";

interface Props {
  series?: SeriesAPI[];
  children: string;
}

const SeriesInicio = ({ series, children }: Props) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "95%",
          margin: 10,
          marginLeft: 20,
        }}
      >
        <div className="card-header">{children}</div>
        <ul
          className="list-group list-group-flush"
          // style={{ overflowY: "scroll" }}
        >
          {series?.length ? (
            series.map((item, index) => (
              <Link
                key={index}
                style={{ cursor: "pointer" }}
                className="list-group-item"
                to={"/series/" + item.info.titulo} // ?id=${item.id}`
                state={{ serie: item }}
              >
                {item.info.titulo}
              </Link>
            ))
          ) : (
            <li className="list-group-item">
              <em>No hay series</em>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default SeriesInicio;

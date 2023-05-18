import { InfoSeriesAPI } from "../api/Cliente";

interface Props {
  series?: InfoSeriesAPI[];
  children: string;
}

const SeriesInicio = ({ series, children }: Props) => {
  return (
    <>
      <div
        className="card"
        style={{ width: "95%", margin: 10, marginLeft: 20 }}
      >
        <div className="card-header">{children}</div>
        <ul className="list-group list-group-flush">
          {series?.length ? (
            series.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.titulo}
              </li>
            ))
          ) : (
            <li className="list-group-item">No hay series</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default SeriesInicio;

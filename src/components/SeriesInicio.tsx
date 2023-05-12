import { ReactNode } from "react";

interface Props {
  items: string[];
  children: ReactNode;
}
const SeriesInicio = ({ children, items }: Props) => {
  return (
    <>
      <div
        className="card"
        style={{ width: "95%", margin: 10, marginLeft: 20 }}
      >
        <div className="card-header">{children}</div>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SeriesInicio;

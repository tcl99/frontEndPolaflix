import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
//rafce para hacerlo automatico
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

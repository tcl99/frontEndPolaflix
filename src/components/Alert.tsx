import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  //Notifica al padre que se esconde
  onClose: () => void;
}

//rafce para hacerlo automatico
const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div
        className={"alert alert-secondary alert-dismissible animate show"}
        style={{ width: "50%" }}
      >
        {children}
        <button
          onClick={() => {
            onClose();
          }}
          //onClick={onClose}
          className="btn-close"
          data-dismiss="alert"
        ></button>
      </div>
    </>
  );
};

export default Alert;

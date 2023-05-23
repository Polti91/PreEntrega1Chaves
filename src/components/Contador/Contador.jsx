import "./Contador.css";
import { useState } from "react";

const Contador = ({ stock, inicial }) => {
  const [contador, setContador] = useState(inicial);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={disminuirContador} className="btn btn-primary">
        {" "}
        -{" "}
      </button>
      <strong>{contador}</strong>
      <button onClick={aumentarContador} className="btn btn-primary">
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Contador;

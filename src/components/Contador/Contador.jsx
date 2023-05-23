import "./Contador.css";
import { useState } from "react";

const Contador = ({ stockTotal, inicial }) => {
  const [contador, setContador] = useState(inicial);

  const aumentarContador = () => {
    if (contador < stockTotal) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const adicionar = () => {
    console.log(`${contador} weas agregadas al carrito.`);
  };

  return (
    <div className="text-center">
      <button onClick={disminuirContador} className="btn btn-primary">
        {" "}
        -{" "}
      </button>
      <strong>{contador}</strong>
      <button onClick={aumentarContador} className="btn btn-primary">
        {" "}
        +{" "}
      </button>
      <br />

      <button
        onClick={adicionar}
        className="btn btn-primary d-grid gap-2 col-6 mx-auto m-1"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Contador;

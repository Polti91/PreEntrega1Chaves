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

  const adicionar = () => {
    console.log(`${contador} weas agregadas al carrito.`);
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
      <br />

      <button onClick={adicionar}>Agregar</button>
    </div>
  );
};

export default Contador;

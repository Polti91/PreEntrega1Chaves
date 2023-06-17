import { useState } from "react";

const Contador = ({ stockTotal, inicial, adicionarItem }) => {
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

  //const adicionar = () => {
  //  console.log(`${contador} weas agregadas al carrito.`);
  //};

  return (
    <>
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
      </div>

      <button
        onClick={() => adicionarItem(contador)}
        className="btn btn-primary d-grid gap-2 col-6 mx-auto m-1"
      >
        Comprar
      </button>
    </>
  );
};

export default Contador;

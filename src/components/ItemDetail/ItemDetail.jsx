import "./ItemDetail.css";
import Contador from "../Contador/Contador";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, stock, img, description }) => {
  const [adicionar, setAdicionar] = useState(0);

  const handlerAdicionar = (adicion) => {
    setAdicionar(adicion);
    console.log("Agregados:" + adicion);

  }
  return (
    <div className="flexcss">
      <div className="card m-3" style={{ width: "19rem" }}>
        <img src={img} className="card-img-top mt-1 imgProducto mx-auto" alt={nombre} />
        <div className="card-body flex-row m-3">
          <h5 className="card-title text-center">{nombre}</h5>
          <p className="card-text text-center m-1">{description}</p>
          <p className="card-text text-center m-1">ID: {id}</p>
          <p className="card-text text-center m-1">Precio: {precio}</p>
          <p className="card-text text-center m-1">Stock {stock}</p>
          {
            adicionar > 0 ? (<Link to="/cart"> <button
            className="btn btn-primary d-grid gap-2 col-6 mx-auto m-1"
          >
            Finalizar compra
          </button></Link>) : (<Contador stockTotal={stock} inicial={1} adicionarItem={handlerAdicionar} />)
          }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

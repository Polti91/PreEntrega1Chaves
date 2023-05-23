import React from "react";
import Contador from "../Contador/Contador";

const ItemDetail = ({ id, nombre, precio, stock, img, description }) => {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top mt-1 imgProducto" alt={nombre} />
        <div className="card-body flex-row m-3">
          <h5 className="card-title text-center">{nombre}</h5>
          <p className="card-text text-center m-1">{description}</p>
          <p className="card-text text-center m-1">ID: {id}</p>
          <p className="card-text text-center m-1">Precio: {precio}</p>
          <p className="card-text text-center m-1">Stock {stock}</p>
          <Contador stockTotal={stock} inicial={1}/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

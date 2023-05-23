import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../asyncmock";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className="centrado">{greeting}</h2>
      <div>
      <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;

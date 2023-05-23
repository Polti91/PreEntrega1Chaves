import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);


  const {categoryId} = useParams();  
  console.log(categoryId)

  useEffect(() => {
    
    const reglaProductos = categoryId ? getProductsByCategory : getProductos;

    reglaProductos(categoryId)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error));
  }, [categoryId]);
  

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

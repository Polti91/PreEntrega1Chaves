import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const myProducts = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");
    getDocs(myProducts)
      .then((response) => {
        const newProducts = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(newProducts);
      })
      .catch((error) => console.log(error));
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

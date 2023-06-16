import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", itemId);
    getDoc(nuevoDoc)
    .then( response => {
      const data = response.data();
      const newProduct = {id: response.id, ...data}
      setProduct(newProduct);
    })
    .catch((error)=> console.log(error))
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

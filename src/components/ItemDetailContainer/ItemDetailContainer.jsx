import { useState, useEffect } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getItem(1).then((response) => setProduct(response));
  }, []);
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer
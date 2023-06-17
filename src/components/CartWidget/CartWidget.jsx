import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQty } = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
        <div className="flex">
          <img
            className="imagenCarrito"
            src="../imagenes/bag.png"
            alt="Carrito de Compras"
          />
          {totalQty > 0 && <span>{totalQty}</span>}
        </div>
      </Link>
    </>
  );
};

export default CartWidget;

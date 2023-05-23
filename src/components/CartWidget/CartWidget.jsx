import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <div className="flex">
        <img
          className="imagenCarrito"
          src="../../../public/imagenes/bag.png"
          alt="Carrito de Compras"
        />
      </div>
      <div>
        <p>5</p>
      </div>
    </>
  );
};

export default CartWidget;

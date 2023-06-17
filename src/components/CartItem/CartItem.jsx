import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartItem.css"



const CartItem = ({item, qty}) => {
    const {deleteProduct} = useContext(CartContext);
  return (
          <div className="card cardcss border border-3 d-grid gap-2 col-6 mx-auto m-1">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {qty}</p>
        <p>Precio: {item.precio}</p>
        <button className="btn btn-primary d-grid gap-2 col-6 mx-auto m-1" onClick={()=> deleteProduct(item.id)}>Eliminar</button>
        </div>
  )
}

export default CartItem
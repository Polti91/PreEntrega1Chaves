import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const CartItem = ({item, qty}) => {
    const {deleteProduct} = useContext(CartContext);
  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {qty}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={()=> deleteProduct(item.id)}>Eliminar</button>
    </div>
  )
}

export default CartItem
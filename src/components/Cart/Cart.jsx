import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, total, totalQty} = useContext(CartContext);

    if(totalQty === 0) {
        return (
            <>
            <h2>El carrito está vacío.</h2>
            <Link to='/'>Ver productos</Link>
            </>
        )
    } 
  return (
    <>
    <div>
        {cart.map((item) => <CartItem key={item.id} {...item} />)}
        <h3>Total: ${total}</h3>
        <h3>Cantidad total: {totalQty}</h3>
        <button onClick={()=> clearCart()}>Vaciar carrito</button>
        <Link to='/checkout'>Finalizar compra</Link>
        </div>
        </>
  )

}

export default Cart
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, total, totalQty} = useContext(CartContext);

    if(totalQty === 0) {
        return (
            <>
            <h2 className="d-grid gap-2 col-2 mx-auto m-5">El carrito está vacío.</h2>
            <Link to='/'><button className="btn btn-primary d-grid gap-2 col-6 mx-auto m-5">Ver productos</button></Link>
            </>
        )
    } 
  return (
    <>
    <div className="container">
    <div className="container d-flex justify-content-evenly flex-wrap mt-2">
    {cart.map((items) => <CartItem key={items.id} {...items} />)}
    </div>
      <div className="mx-auto mt-4">

        <h3 className="d-grid gap-2 col-2 mx-auto m-1">Productos: {totalQty}</h3>
        <h3 className="d-grid gap-2 col-2 mx-auto m-1">Total: ${total}</h3>
        <button className="btn btn-primary d-grid gap-2 col-6 mx-auto m-1" onClick={()=> clearCart()}>Vaciar carrito</button>
        <Link to='/checkout'>
          <button className="btn btn-primary d-grid gap-2 col-6 mx-auto m-1">Finalizar compra</button>
          </Link>
        </div>
        </div>
        </>
  )

}

export default Cart
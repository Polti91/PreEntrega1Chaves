import './CartWidget.css';
import BagCarrito from '../../assets/imagenes/bag.png'
const CartWidget = () => {
  return (
    <>
    <div className='flex'>
        <img className='imagenCarrito' src={BagCarrito} alt="Carrito de Compras" />
           </div>
           <div><p>5</p></div>
           </>
  )
}

export default CartWidget
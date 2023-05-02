import React from 'react'
import './ItemListContainer.css'
import SombraLuna from '../../assets/imagenes/sombraluna.jpg'
const ItemListContainer = () => {
  return (
    <div>
        <div className="card" style={{width: '18rem'}}>
  <img src={SombraLuna} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Cementerios Sombraluna</h5>
    <p className="card-text">Carry +10 +16 y +20</p>
    <a href="#" className="btn btn-primary">Comprar</a>
  </div>
</div>

    </div>
  )
}

export default ItemListContainer
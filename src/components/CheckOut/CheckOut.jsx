import React from 'react';
import "./CheckOut.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {db} from "../../services/config"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import swal from 'sweetalert';


const CheckOut = () => {
    const {cart, clearCart} = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handlerForm = ()=>{
        if(!name || !lastName || !tel || !email || !emailConfirmation){
            setError("Debe completar todos los campos");
            return;
        }

        if(email !== emailConfirmation){
            setError("El Email no coincide, revise los campos")
            return;
        }

        if(cart.length === 0){
          setError("El carrito está vacío")
          return;
      }
        
        const order = {
            items: cart.map((product) => ({
                id: product.item.id,
                name: product.item.nombre,
                qty: product.qty
            })),
            total: cart.reduce((total, product)=> total + product.item.precio * product.qty, 0),
            name,
            lastName,
            tel,
            email,
            date: serverTimestamp()
        };

        addDoc(collection(db, "orders"), order)
        .then((docRef) => {
            setOrderId(docRef.id);
            clearCart();
            setError("");
            swal({
              title: "¡Compra realizada con éxito!",
              text: `Orden N°: ${docRef.id}`,
              icon: "success",
            });
            setName("");
setLastName("");
setTel("");
setEmail("");
setEmailConfirmation("");
                })
        .catch((error)=>{
            setError("Error al crear orden", error);
        })

        
    }

  return (
    <>
    <div className="container form">
            <h2 className="mx-auto">Confirmá tu orden</h2>
            <form className="mx-auto d-grid gap-2 col-6 mx-auto m-1">
                {cart.map((product)=>(
                    <div className='border border-3 mb-3'>
                    <div key={product.item.id}>
                        <p>
                            {product.item.nombre} x {product.qty}
                        </p>
                        <p>Precio $: {product.item.precio}</p>
                    </div>
                    </div>
                ))}
            </form>
          <form className="mx-auto d-grid gap-2 col-6 mx-auto m-1">
          <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Pablo" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="floatingInput">Nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Chaves" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <label htmlFor="floatingInput">Apellido</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="11111111" value={tel} onChange={(e)=>setTel(e.target.value)}/>
        <label htmlFor="floatingInput">Teléfono</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={emailConfirmation} onChange={(e)=>setEmailConfirmation(e.target.value)}/>
        <label htmlFor="floatingInput">Confirmá tu Email</label>
      </div>
      {error && <p className="error">{error}</p>}
      <button type="button" className="btn btn-success" onClick={handlerForm}>Finalizar</button>

      </form>
      </div>
    </>
  )
}

export default CheckOut
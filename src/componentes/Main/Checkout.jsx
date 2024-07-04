import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection,addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';

function Checkout() {2

    const {carrito, calcularTotal,vaciarCarrito} = useContext(CartContext);
    const [docId, setDocId] = useState()
    const {register,handleSubmit} = useForm();
    
    
    const comprar = (data) =>{
        const pedido ={
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha:Timestamp.now()
        }
        const pedidosRef = collection(db,"pedidos");
        
        addDoc(pedidosRef,pedido)
        .then((doc)=>{
            setDocId(doc.id);
            vaciarCarrito();
        })
    }
    if(docId){
        return (
            <>
            <h1>muchas gracias por tu compra</h1>
            <p>la clave de tu pedido es {docId}</p>
            </>
        )
    }
    return (
        <div>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <h1>Este es su pedido</h1>
                <div className='producto-card-check'>
                    {carrito.map((prod)=>{
                        return  <div className='contenedor-info-check'>
                                    <img className="producto-imagen" src={prod.imagen} alt={prod.nombre} />
                                    <h2 className='producto-titulo-check'>{prod.nombre}</h2>
                                    <p className='producto-precio-check'>${prod.precio}</p>
                                    <p>cantidad:{prod.cantidad}</p>
                                </div>
                    })}
                </div>
                <h2 className='total-compra'>Este es el total: ${calcularTotal()}</h2>
                <div className='datos-usuarios'>
                <input type="text" placeholder="ingrese su nombre y apellido" {...register("nombre")} />
                <input type="email" placeholder='ingrese su e-mail' {...register("email")}/>
                <button type="submit">comprar</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
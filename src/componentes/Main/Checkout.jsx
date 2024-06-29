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
            <form onSubmit={handleSubmit(comprar)}>
                <div>
                    <p>este es su pedido</p>
                    {carrito.map((prod)=>{
                        return<>
                        <img className="producto-imagen" src={prod.imagen} alt={prod.nombre} />
                        <h2 className='producto-titulo'>{prod.nombre}</h2>
                        <p className='producto-precio'>${prod.precio}</p>
                        <p>{prod.cantidad}</p>
                        </>
                    })}
                    <p>este es el total:{calcularTotal()}</p>
                </div>
                <input type="text" placeholder="ingrese su nombre y apellido" {...register("nombre")} />
                <input type="email" placeholder='ingrese su e-mail' {...register("email")}/>
                <button type="submit">comprar</button>
            </form>
        </div>
    )
}

export default Checkout
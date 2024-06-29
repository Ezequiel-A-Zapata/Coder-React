import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

function ItemDetail({producto}) {
    
    
    const {agregarAlCarrito,cantidad,sumarAlCarrito,restarAlCarrito,resetCantidad} = useContext(CartContext)
    
    useEffect(()=>{
        resetCantidad();
    },[])

    console.log(cantidad)
    return (
    <>
    <div className='producto-card'>
        <img className="producto-imagen" src={producto.imagen} alt={producto.nombre} />
        <h2 className='producto-titulo'>{producto.titulo}</h2>
        <p className='producto-precio'>${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <div className='cantidad-contenedor'>
        <button className='boton-sumar-restar' onClick={restarAlCarrito}>-</button>
        <p>cantidad: {cantidad}</p>
        <button className='boton-sumar-restar' onClick={sumarAlCarrito}>+</button>
        </div>
        <button className='agregar-al-carrito' onClick={()=> agregarAlCarrito(producto,cantidad)}>agregar al carrito</button>
    </div> 
    </>
    )
}

export default ItemDetail
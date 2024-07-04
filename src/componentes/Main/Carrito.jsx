import React, { Fragment, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

function Carrito() {

    const {carrito, calcularTotal, borrarProducto,vaciarCarrito} = useContext(CartContext);

    return (
    <div className='carrito'>
        {carrito.map((producto =>  
        <Fragment key={producto.id}>
        <div className='contenedor-carrito'> 
            <img className="producto-imagen" src={producto.imagen} alt={producto.nombre} />
            <div className='contenedor-npc'>
            <h2 className='nombre-y-precio'> {producto.nombre}: ${producto.precio}</h2>
            <p>cantidad:{producto.cantidad}</p>
            </div>
            <button className='boton-borrar' onClick={()=> borrarProducto(producto.id)}>x</button>
        </div>
        </Fragment>))}
        {carrito.length > 0 ? 
        <>
        <div className='carrito-total'>
        <h2>Total: ${calcularTotal()}</h2>
        <button className='vaciar-carrito' onClick={vaciarCarrito}>limpiar</button>
        </div>
        <Link className='finalizar-compra' to="/checkout">Finalizar Compra</Link>
        
        </> : <h2 className='carrito-vacio'> Carrito vacio...</h2> }
    </div>
    )
}

export default Carrito
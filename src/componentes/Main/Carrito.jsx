import React, { Fragment, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

function Carrito() {

    const {carrito, calcularTotal, borrarProducto,vaciarCarrito} = useContext(CartContext);

    return (
    <div>
        {carrito.map((producto =>  
        <Fragment key={producto.id}>
        <div> 
        <h1> {producto.nombre}:${producto.precio}</h1>
        <button onClick={()=> borrarProducto(producto.id)}>borrar x</button>
        <p>cantidad:{producto.cantidad}</p>
        </div>
        </Fragment>))}
        {carrito.length > 0 ? 
        <>
        <h2>Total:: ${calcularTotal()}</h2>
        <button onClick={vaciarCarrito}>vaciar carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
        </> : <h2 className='carrito-vacio'> Carrito vacio...</h2> }
    </div>
    )
}

export default Carrito
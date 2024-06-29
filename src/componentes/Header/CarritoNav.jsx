import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function CarritoNav() {
    const {cantidadEnCarrito} = useContext(CartContext);
    return (
    <Link to="/carrito" className='carritonav'><p>🛒{cantidadEnCarrito()}</p></Link>
    )
}

export default CarritoNav
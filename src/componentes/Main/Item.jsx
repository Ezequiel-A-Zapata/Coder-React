import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function Item({ producto }) {
    
    const {agregarAlCarrito,cantidad} = useContext(CartContext)
    
    
    return (
        <div className='producto-card'>
                <img className="producto-imagen" src={producto.imagen} alt={producto.nombre} />
                <h2 className='producto-titulo'>{producto.nombre}</h2>
                <p className='producto-precio'>${producto.precio}</p>
            <Link to={`/item/${producto.id}`} className='button-ver-mas'>Ver mas</Link>
            <button className='agregar-al-carrito' onClick={()=> agregarAlCarrito(producto,cantidad)}>Agregar al Carrito</button>
        </div>
    )
}

export default Item
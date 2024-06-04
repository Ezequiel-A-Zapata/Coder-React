import React from 'react'
import ItemDetail from './ItemDetailContainer'
import { Link } from 'react-router-dom'

function Item({ producto }) {
    return (

        <div className='producto-card'>
                <img className="producto-imagen" src={producto.image} alt={producto.title} />
                <h2 className='producto-titulo'>{producto.title}</h2>
                <p className='producto-precio'>${producto.price}</p>
            <Link to={`/item/${producto.id}`} className='button-ver-mas'>Ver mas</Link>
        </div>
    )
}

export default Item
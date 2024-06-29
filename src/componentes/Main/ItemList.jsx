import React from 'react'
import Item from './Item'

function ItemList( {productos, titulo} ) {
    return (
        <>
    <h1 className='main-titulo'>{titulo}</h1>
    <div className='item-list-container'>
                {
                    productos.length > 0 ?
                    productos.map((producto) => {
                        return (
                            <Item key={producto.id} producto={producto} />
                            )
                    }) : <h2 className='cargando'>cargando...</h2>
                }
            </div>
        </>
    ) 
}

export default ItemList
import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { CartContext } from '../../context/CartContext';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {

    let { itemId } = useParams();
    const [producto, setProducto] = useState(undefined);


    useEffect(() => {
        const docRef = doc (db,"productos",itemId);
        
        getDoc(docRef)
        .then(res =>{
            setProducto({...res.data(), id: res.id});
        })
        console.log(producto);
    }, [itemId]);

    return (
        <section className='item-detail-container'>
            <div className='div-detail'>
            {producto ?
            <ItemDetail producto={producto}/>: <h2 className='cargando-detail'>cargando...</h2>
            }
            </div>
        </section>
    )
}

export default ItemDetailContainer
import React, { useState, } from 'react'
import { useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

function ItemListContainer() {
    let {categoryId} = useParams();


    

    const [productos, setProductos] = useState([]);
    const [titulo,setTitulo] = useState("PRODUCTOS");

    useEffect(() => {
        const productosRef = collection (db,"productos");
        const q = categoryId ? query(productosRef, where("categoria.id","==",categoryId)): productosRef;
            getDocs(q)
            .then(res => {
                categoryId && setTitulo(categoryId.toLocaleUpperCase());
                setProductos(
                res.docs.map((doc)=>{
                    return{...doc.data(),id:doc.id}
                })
            )
        })
    }, [categoryId]);


    return (
        <main>
            <ItemList titulo={titulo} productos={productos}/>
        </main>
    )
}

export default ItemListContainer
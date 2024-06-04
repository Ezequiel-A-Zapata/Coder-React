import React, { useState, } from 'react'
import { useEffect } from 'react';
import ItemList from './ItemList';
import categorias from  '../../services/categorias.json'
import { useParams } from 'react-router-dom';
import fetchToken from './fetchToken';

function ItemListContainer() {
    let {categoryId} = useParams();


    
    const [token, setToken] = useState();
    const [productos, setProductos] = useState([]);
    const [titulo,setTitulo] = useState("productos");


    useEffect(() => {
        const url = "https://fakestoreapi.com/auth/login"
        const data = {
            username: "mor_2314",
            password: "83r5^_"
        };
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la autenticación: " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log("Token obtenido:", data.token);
                setToken(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [])

    useEffect(() => {
        if (token) {
            const obtenerProductos = async () => {
                const url = "https://fakestoreapi.com/products";
                try {
                    const response = await fetch(url, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    if (!response.ok) {
                        throw new Error("Error al obtener productos: " + response.statusText);
                    }
                    const result = await response.json();
                    console.log("Productos obtenidos:", result);
                    if (categoryId) {
                        setProductos(result.filter((prod)=>prod.category === categoryId));
                        setTitulo(categorias.find((cat)=> cat.id === categoryId).nombre);
                    }else {
                        setProductos(result);
                        setTitulo("Productos");
                    };
                } catch (error) {
                    console.error("Error:", error);
                    setError(error.message);
                }
                console.log(categoryId);
            };
            obtenerProductos();
        }
    }, [token,categoryId]);


    return (
        <main>
            <ItemList titulo={titulo} productos={productos}/>
        </main>
    )
}

export default ItemListContainer
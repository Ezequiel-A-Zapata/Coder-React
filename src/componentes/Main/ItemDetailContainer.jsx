import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

function ItemDetailContainer() {

    let { itemId } = useParams();


    const [token, setToken] = useState();
    const [producto, setProducto] = useState([]);


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
                    setProducto(result.find((prod) => prod.id === parseInt(itemId)));
                    console.log(itemId);
                } catch (error) {
                    console.error("Error:", error);
                    setError(error.message);
                }
            };
            obtenerProductos();
        }
    }, [token, itemId]);

    return (
        <section className='item-detail-container'>
            <div className='div-detail'>
            {producto ?
                <div className='producto-card'>
                    <img className="producto-imagen" src={producto.image} alt={producto.title} />
                    <h2 className='producto-titulo'>{producto.title}</h2>
                    <p className='producto-precio'>${producto.price}</p>
                    <p>{producto.description}</p>
                    <Link to="/" >Volver a inicio</Link>
                </div> : <p>cargando...</p>
            }
            </div>
        </section>
    )
}

export default ItemDetailContainer
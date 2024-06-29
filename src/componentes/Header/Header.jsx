import React, { useEffect, useState } from 'react'
import MenuHamburguesa from './MenuHamburguesa'
import { Link, NavLink } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection,getDocs } from 'firebase/firestore'
import CarritoNav from './CarritoNav'

export default function Header( ) {

    const [categorias, setCategorias] = useState([])
    const categoriasRef = collection (db, "categorias")
    
useEffect(()=>{
    getDocs(categoriasRef)
        .then((res)=>{
            setCategorias(res.docs.map((doc)=> {
                return {...doc.data(), id: doc.id}
            }))
        });
        console.log(categorias);
},[])
    
    return (
        <div className='contenedor-header'>
            <header className='header'>
                <div className='logo-menu'>
                    <MenuHamburguesa />
                    <h1 className='logo'><Link to="/">TecHome</Link></h1>
                </div>
                <nav className='navbar'>
                    <ul className='lista'>
                        <li>
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                            {
                                categorias.map((category)=>{
                                    return (
                                    <li key={category.id}>
                                        <NavLink to={`/category/${category.id}`} activeclassname="acive" className="nav-link">{category.nombre}</NavLink>
                                    </li>)
                                })
                            }
                    </ul>
                </nav>
                <CarritoNav />
            </header>
        </div>
    )
}

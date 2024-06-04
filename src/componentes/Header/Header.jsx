import React from 'react'
import Carrito from './Carrito'
import MenuHamburguesa from './MenuHamburguesa'
import { Link, NavLink } from 'react-router-dom'
import categorias from  '../../services/categorias.json'

export default function Header({ numerito }) {
    console.log (categorias);
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
                <Carrito numerito={numerito} />
            </header>
        </div>
    )
}

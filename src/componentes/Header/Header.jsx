import React from 'react'
import Carrito from './Carrito'

export default function Header() {
    return (
    <div className='contenedor-header'>
    <header className='header'>
        <div className='logo-menu'>
        <img src="img/menu-hamburguesa.png" alt="menu-hamburguesa" className='img-menu' />
        <h1 className='logo'><a href="">TecHome</a></h1>
        </div>
        <nav className='navbar'>
            <ul className='lista'>
                <li><a href="">CELULARES</a></li>
                <li><a href="">NOTEBOOKS..</a></li>
                <li><a href="">ELECTRO-DOMESTICOS</a></li>
            </ul>
        </nav>
        <Carrito />
    </header>
    </div>
    )
}

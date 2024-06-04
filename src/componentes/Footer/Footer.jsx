import React from 'react'

function Footer() {
    return (
    <footer className='footer'>
        <div className='info-footer'>
            <h2 className='titulo-final'>TecHome</h2>
            <ul className='ul-final'>
                <p className='categorias'>Categorias</p>
                <li>Celulares</li>
                <li>Notebooks</li>
                <li>Electro-Domesticos</li>
            </ul>
            <ul className='ul-final'>
                <p className='marcas'>Marcas</p>
                <li>Samsung</li>
                <li>Apple</li>
                <li>Asus</li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer
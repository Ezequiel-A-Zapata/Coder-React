import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [cantidad,setCantidad] = useState (1);

    console.log(cantidad)
    const resetCantidad = () =>{
        setCantidad(1)
    }
    
    const restarAlCarrito = () => {
        cantidad > 1 &&
        setCantidad(cantidad - 1);
    }
    const sumarAlCarrito = () => {
        setCantidad(cantidad + 1)
    }

    const agregarAlCarrito = (producto,cantidad) => {
        const productoAgregado = {...producto,cantidad}
        
        const nuevoCarrito = [...carrito];
        const productoEncontrado = nuevoCarrito.find((producto)=> producto.id == productoAgregado.id);
        if(productoEncontrado){
            productoEncontrado.cantidad = productoEncontrado.cantidad + cantidad;
            productoEncontrado.precio = productoEncontrado.precio * productoEncontrado.cantidad;
            setCarrito(nuevoCarrito);
        }else{
            console.log(cantidad);
            setCarrito([...carrito, productoAgregado])
        }

    }
    const calcularCantidad = () => {
        return carrito.length;
    }
    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }
    const borrarProducto = (productoId) => {
        setCarrito(carrito.filter((prod) => prod.id !== productoId))
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }
    const cantidadEnCarrito = () =>{
        return carrito.reduce((acc, prod) => acc + prod.cantidad,0)
    }
    return(
        <CartContext.Provider value={{carrito,cantidad,resetCantidad,cantidadEnCarrito,sumarAlCarrito,restarAlCarrito,agregarAlCarrito,calcularCantidad,calcularTotal,borrarProducto,vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}
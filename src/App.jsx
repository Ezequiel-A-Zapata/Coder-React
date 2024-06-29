import "./App.css"
import Header from "./componentes/Header/Header"
import Footer from "./componentes/Footer/Footer"
import ItemListContainer from "./componentes/Main/ItemListContainer"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ItemDetailContainer from "./componentes/Main/ItemDetailContainer"
import Carrito from "./componentes/Main/Carrito"
import { CartProvider } from "./context/CartContext"
import Checkout from "./componentes/Main/Checkout"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

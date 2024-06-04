import "./App.css"
import Header from "./componentes/Header/Header"
import Footer from "./componentes/Footer/Footer"
import ItemListContainer from "./componentes/Main/ItemListContainer"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useState } from "react"
import ItemDetailContainer from "./componentes/Main/ItemDetailContainer"

function App() {
  const [numerito,setNumerito] = useState("1");
  return (
    <BrowserRouter>
    <Header numerito={numerito}/>
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App

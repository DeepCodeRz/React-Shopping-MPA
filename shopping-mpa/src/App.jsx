import { createContext, useContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import Heading from './components/Heading'
import HeaderNav from "./components/HeaderNav.jsx";
import NavItem from './components/NavItem.jsx';
import Layout from "./components/Layout.jsx";
import Card from "./pages/Products/Card.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetail from "./pages/Products/ProductDetail.jsx";
import BasketLayout from "./components/BasketLayout.jsx";
import CartProducts from "./pages/Cart/CartProducts.jsx";
import FavoriteProducts from "./pages/Cart/FavoriteProducts.jsx";
import About from "./pages/About.jsx";

import "./mirageServer.js"

const BagContext = createContext([])

function App() {
    const [bagItems, setBagItems] = useState({cartItems: [], favoriteItems: []})


    return (
        <BagContext.Provider value={{ bagItems, setBagItems }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Products />}/>
                        <Route path="products/:id" element={<ProductDetail />}/>

                        <Route path="bag" element={<BasketLayout />}>
                            <Route index element={<CartProducts />}/>
                            <Route path="favorites" element={<FavoriteProducts />}/>
                        </Route>

                        <Route path="about" element={<About />}/>
                    </Route>
                </Routes>
            </Router>
        </BagContext.Provider >
    )
}

export default App

export { BagContext }
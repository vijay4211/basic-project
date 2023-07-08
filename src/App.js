import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ProductPage from './ProductPage'
import ProductDetailPage from './ProductDetailPage'
import Navbar from './Navbar'
import Cart from './Cart'

const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<ProductPage />}/>
      <Route path='productdetailpage/:id' element={<ProductDetailPage />}/>
      <Route path='/cart' element={<Cart />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
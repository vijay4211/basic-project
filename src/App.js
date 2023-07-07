import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ProductPage from './ProductPage'
import ProductDetailPage from './ProductDetailPage'

const App = () => {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<ProductPage />}/>
      <Route path='productdetailpage/:id' element={<ProductDetailPage />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
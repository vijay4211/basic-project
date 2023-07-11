import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ProductPage from './ProductPage'
import ProductDetailPage from './ProductDetailPage'
import Navbar from './Navbar'
import Cart from './Cart'
import PaymentPage from './PaymentPage'
import Login from './Login'
import SignUp from './SignUp'

const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<ProductPage />}/>
      <Route path='productdetailpage/:id' element={<ProductDetailPage />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/paymentpage' element={<PaymentPage />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
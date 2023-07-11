import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="h-11 flex justify-between items-center px-7 shadow-lg">
        {/* go to the ProductPage  */}
        <Link to="/">Home</Link>
        {/* go to the Cart Page */}
        <Link to="/cart" className="bg-blue-300 px-3">
          CART
        </Link>
      </div>
    </div>
  )
}

export default Navbar

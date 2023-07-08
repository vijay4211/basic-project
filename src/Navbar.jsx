import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="h-11 flex justify-between items-center px-7 shadow-lg">
        <Link to="/">Home</Link>
        <Link to="/cart" className="bg-blue-300 px-3">
          CART
        </Link>
      </div>
    </div>
  )
}

export default Navbar

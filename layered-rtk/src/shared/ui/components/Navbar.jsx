import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="shrink">
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Logo
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-600 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/main/product" 
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-600 transition-colors"
            }
          >
            Shop
          </NavLink>
          <NavLink 
            to="/main/about" 
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-indigo-600 transition-colors"
            }
          >
            About
          </NavLink>
        </div>

        {/* Right - Icons & Logout */}
        <div className="flex items-center space-x-5">
          {/* Cart Icon */}
          <NavLink 
            to="/main/cart" 
            className="text-gray-600 hover:text-indigo-600 transition-colors relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </NavLink>

          {/* Box/Profile Icon */}
          <NavLink 
            to="/main/order" 
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </NavLink>

          {/* Logout Button */}
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors text-sm font-medium">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
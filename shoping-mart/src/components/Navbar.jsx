import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-950'>
      <div className='flex flex-row justify-between'>
        <NavLink to="/">
          <div>
            <img src="https://st4.depositphotos.com/12985790/19688/i/380/depositphotos_196884578-stock-photo-smiling-stylish-asian-woman-shopping.jpg" alt="" />

          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <IoCart />
            </div>
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
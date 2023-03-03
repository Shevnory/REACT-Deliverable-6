import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ecommerceLogo from './../../../public/Gv.svg' 

const Navbar = () => {

    const {products} = useSelector(store => store.cart)

return (
    <nav className="navbar">
        <Link to="/" className='navbar_link_icon' >  
            <div className='navbar_icon' >
                <img className='navbar_logo' src={ecommerceLogo} alt="" />
                <h1>e-commerce</h1>
            </div>
        </Link>
        <div className='navbar_buttons' >
            <Link to="/login" className='navbar_link'>
                <button className='navbar_btn' ><i className='bx bx-user-circle'></i></button>
            </Link>
            <Link to="/purchases" className='navbar_link'>
                <button className="navbar_btn"><i className='bx bx-history' ></i></button>
            </Link>
            <Link to="/cart" className='navbar_link'>
                <button className="navbar_btn">
                <i className='bx bx-cart'></i>
                <i className='navbar_quantity_cart' > {products.length} </i>
                </button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logoBook.jpg';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img className='logo-work' src={logo} alt="" />
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        // user ?
                        //     <button onClick={handleSingOut}>Sing Out</button>
                        //     :
                        <Link to="/login">Login</Link>}
                </div>
            </nav>
        </div>
    );
};

export default Header;
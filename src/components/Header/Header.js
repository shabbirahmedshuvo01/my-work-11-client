import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logoBook.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSingOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav className='header'>
                <img className='logo-work' src={logo} alt="" />
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/">Manage Items</Link>
                    <Link to="/addbook">Add Item</Link>
                    <Link to="/about">My items</Link>
                    {
                        user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSingOut}>Log Out</button>
                            :
                            <Link to="/login">Login</Link>}
                </div>
            </nav>
        </div>
    );
};

export default Header;
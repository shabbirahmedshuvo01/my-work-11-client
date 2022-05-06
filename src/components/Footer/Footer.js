import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark text-white' style={{ height: '100px' }}>
            <p>All Credit or copyright © deserve by Product Dealership {year}</p>
        </div>
    );
};

export default Footer;
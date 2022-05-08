import React from 'react';
import hablu from '../../images/show.jpg'
import Product from '../Products/Product/Product';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='d-flex align-items-center p-5 mt-5 bg-success text-dark bg-opacity-25 justify-content-evenly responsive'>
                <div>
                    <img src={hablu} alt="" />
                </div>
                <div>
                    <h3>This is a Book Best ever for programer</h3>
                    <p>This book have many structured programming language.This book have many details of programming.</p>
                    <p><small>release date: May 25, 2020</small></p>
                    <h5 className='text-success'>In stock</h5>
                    <br />
                    <button className='btn btn-primary'>Book Now</button>
                </div>
            </div>
            <div>
                <Product></Product>
            </div>
        </div>
    );
};

export default Banner;
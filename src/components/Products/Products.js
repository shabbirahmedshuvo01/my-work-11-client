import React from 'react';

const Products = (props) => {
    const { name, quantity, description, img, price } = props.book
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-text">Quantity: {quantity}</h5>
                    <h6 className="card-title">Per Book: {price}</h6>
                    <p className="card-text">{description}</p>
                    <p><small className='text-success'>In Stock</small></p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
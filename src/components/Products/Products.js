import React from 'react';

const Products = (props) => {
    const { name, price, description, img } = props.book
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-text">Price: {price}</h5>
                    <p className="card-text">{description}</p>
                    <p><small className='text-success'>In Stock</small></p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
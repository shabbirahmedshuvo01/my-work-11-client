import React from 'react';
import pic from './../../images/logoBook.jpg'

const Products = () => {
    return (
        <div>
            <h2>My Products Are</h2>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={pic} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
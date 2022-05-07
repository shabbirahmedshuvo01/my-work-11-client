import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {
    const { id, name, quantity, description, img, price, supply } = props.book;
    const navigate = useNavigate();
    const navigateToBooksDetail = id => {
        navigate(`books/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-text">Quantity: {quantity}</h5>
                    <h6 className="card-title">Per Book: {price}</h6>
                    <h6 className="card-title">Supplier: {supply}</h6>
                    <p className="card-text">{description}</p>
                    <p><small className='text-success'>In Stock</small></p>
                    <button onClick={() => navigateToBooksDetail(id)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
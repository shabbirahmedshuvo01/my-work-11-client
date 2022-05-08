import React, { useEffect, useState } from 'react';
import Section from '../../Section/Section';
import Products from '../Products';

const Product = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/book')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div>
            <div className="container mt-5">
                <div className="row bg-success text-dark bg-opacity-25">
                    <h1 className='text-primary text-center mt-5'>Our Books Are</h1>
                    {
                        books.map(book => <Products key={book._id} book={book}></Products>)
                    }
                </div>
            </div>
            <div>
                <Section></Section>
            </div>
        </div>
    );
};

export default Product;
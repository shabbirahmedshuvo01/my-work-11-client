import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();
    const [perBook, setPerBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/book/${bookId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPerBook(data))
    }, [])

    return (
        <div>
            <h2>Your selected product : {perBook.name}</h2>
            <h2>In Stock : {perBook.quantity}</h2>
            <h5>Per Book $: {perBook.price}</h5>
            <h6>Status: <span className='text-success'>In Stock</span></h6>
            <h6>Supplier: {perBook.supply}</h6>
            <p>{perBook.description}</p>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Stocking</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetail;
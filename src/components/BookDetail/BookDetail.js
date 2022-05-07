import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();
    return (
        <div>
            <h2>wellcome to details : {bookId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetail;
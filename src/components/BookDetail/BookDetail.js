import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();
    return (
        <div>
            <h2>wellcome to details : {bookId}</h2>
        </div>
    );
};

export default BookDetail;
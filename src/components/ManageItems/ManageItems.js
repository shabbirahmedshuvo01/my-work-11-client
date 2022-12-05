import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageItems = () => {
    const [books, setBooks] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('are you sure')
        if (proceed) {
            const url = `https://my-work-11-server.onrender.com/book/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const available = books.filter(book => book._id !== id);
                    setBooks(available)
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Mange items work field</h2>
            {
                books.map(book => <div key={book._id}>
                    <h4>{book.name} <button onClick={() => handleDelete(book._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageItems;
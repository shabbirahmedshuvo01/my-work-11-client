import React from 'react';
import { useForm } from "react-hook-form";

const AddBook = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/book`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>please Add a Book</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mb-2' {...register("name")} />
                <input placeholder='supply' className='mb-2' {...register("supply")} />
                <input placeholder='price' className='mb-2' type="text" {...register("price")} />
                <input placeholder='quantity' className='mb-2' type="text" {...register("quantity")} />
                <textarea placeholder='description' type="text" className='mb-2' {...register("description")} />
                <input placeholder='img' className='mb-2' type="text" {...register("img")} />
                <input className='btn btn-primary' type="submit" value="Add Book" />
            </form>
        </div>
    );
};

export default AddBook;
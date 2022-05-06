import React from 'react';
import lazy from './../../images/lazy-cat.jpg'

const Error = () => {
    return (
        <div>
            <h1 className='text-danger'>This page is not found</h1>
            <br />
            <img style={{ height: '600px', width: '200' }} src={lazy} alt="" />
        </div>
    );
};

export default Error;
import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const Register = () => {


    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }


    return (
        <div>
            <div className='register-form'>
                <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className='m-2' type="text" name="name" id="" placeholder='Your Name' required />
                    <br />
                    <input className='m-2' type="email" name="email" id="" placeholder='Email address' required />
                    <br />
                    <input className='m-2' type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input
                        className='mx-auto btn btn-primary mt-2' type="submit" value="register" />
                </form>
                <p>Alredy have an account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none'>Please login</Link></p>
                <Social></Social>
            </div>
        </div>
    );
};

export default Register;
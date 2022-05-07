import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }

    return (
        <div>
            <div className='register-form'>
                <h2 style={{ textAlign: 'center' }}>Please Log In</h2>
                <form onSubmit={handleSubmit}>
                    <input className='m-2 w-25' ref={emailRef} type="email" name="email" id="" placeholder='Email address' required />
                    <br />
                    <input className='m-2 w-25' ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input
                        className='mx-auto btn btn-primary mt-2' type="submit" value="Log In" />
                </form>
                <p>New here? <Link to={'/register'} className='text-primary pe-auto text-decoration-none'>Please register</Link></p>
                <p>forget password? <button className='text-primary pe-auto text-decoration-none btn btn-link'>reset password</button></p>
            </div>
            <Social></Social>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
           <div>
                <h1 className='form-title'>Log In</h1>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? 
                        <Link className='create-account-link' to="/register">Create an account</Link>
                    </p>
           </div>
        </div>
    );
};

export default Login;
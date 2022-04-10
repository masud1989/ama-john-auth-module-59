import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [emeil, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleUserLogin = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(emeil, password);

    }

    return (
        <div className='form-container'>
           <div>
                <h1 className='form-title'>Log In</h1>
                <p style={{color: 'red'}}>{error?.message}</p>
                {
                    loading && <p>Loading....</p>
                }
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? 
                        <Link className='create-account-link' to="/register">Create an account</Link>
                    </p>
                    <span className="line">&mdash; or &mdash;</span>
                    
                    <input className='google-btn' type="submit" value="Login with Google" />
           </div>
        </div>
    );
};

export default Login;
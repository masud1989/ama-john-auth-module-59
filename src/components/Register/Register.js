import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop')
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your Two Passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Passwords Length must be 6 characters or more');
            return;
        }
        // createUserWithEmailAndPassword(email, password)
        //     .then(result =>{
        //         // const user = result.user;
        //         console.log('user created');
        //     });
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
           <div>
                <h1 className='form-title'>Register</h1>
                <p style={{color: 'red' }}>{error}</p>
                {/* <p style={{color: 'red' }}>{hookError}</p> */}
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <input className='submit-btn' type="submit" value="Register" />
                </form>
                <p>
                    Already have an account? 
                        <Link className='create-account-link' to="/login">Login Here</Link>
                    </p>
                    <span className="line">&mdash; or &mdash;</span>
                    
                    <input className='google-btn' type="submit" value="Login with Google" />
           </div>
        </div>
    );
};

export default Register;
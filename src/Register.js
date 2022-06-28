import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { auth } from './firebase';



function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const register = e => {
        e.preventDefault();
        auth.displayName = name;
        auth.createUserWithEmailAndPassword(email, password).then((auth => {
            if (auth) {
                navigate('/login');
                return auth.user.updateProfile({
                    displayName: name
                })
            }
        })).catch(error => alert(error.message));


    }

    return (
        <div className='register'>
            <Link to='/'>
                <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" className='register__logo' />
            </Link>

            <div className="register__container">
                <h1>Register</h1>
                <form>
                    <h5>Name</h5>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />

                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='register__registerButton' onClick={register} >Register</button>
                </form>

                <p>
                    By Registering in you agree to Amazon's(CLONE) conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>
            </div>
        </div>
    )
}

export default Register
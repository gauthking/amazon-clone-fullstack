import React, { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';


function Login() {
    const navigate = useNavigate(); // allows us to programmatically change the url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }

    // const register = e => {
    //     e.preventDefault();

    //     auth.createUserWithEmailAndPassword(email, password).then((auth) => {
    //         console.log(auth)
    //         if (auth) {
    //             navigate('/');
    //         }
    //     })
    //         .catch(error => alert(error.message));
    // }
    return (
        <div className='login'>
            <Link to='/'>
                <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" className='login__logo' />
            </Link>


            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By Signing in you agree to Amazon's(CLONE) conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <Link to='/register'>
                    <button className='login__registerButton' >Create your Amazon(Clone) Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
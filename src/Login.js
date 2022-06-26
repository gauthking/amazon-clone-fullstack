import React from 'react'
import "./Login.css";
import amazonlogo from './amazonlogo.png';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" className='login__logo' />
            </Link>


            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By Signing in you agree to Amazon's(CLONE) conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button className='login__registerButton'>Create your Amazon(Clone) Account</button>
            </div>
        </div>
    )
}

export default Login
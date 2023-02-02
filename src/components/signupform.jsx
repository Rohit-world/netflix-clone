import React from 'react';
import "../pages/login.css"
import { useRef } from 'react';

const Signupform = () => {
const emailref=useRef(null)
const passwordref=useRef(null)


const register=(e)=>{
e.preventDefault()



}

const signin=(e)=>{
e.preventDefault()
}


    return (
        <div className='signup_form'>
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder='Email' />
                <input type="password"  placeholder='Password'/>
                <button type="submit" onClick={signin}>Sign In</button>
                <h4><span className='signup_gray'>New to Netflix? </span> <span className='signup_link' onClick={register}>Sign Up now</span> </h4>

            </form>
        </div>
    );
}

export default Signupform;

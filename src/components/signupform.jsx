import React from 'react';
import "../pages/login.css"

const Signupform = () => {
    return (
        <div className='signup_form'>
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder='Email' />
                <input type="password"  placeholder='Password'/>
                <button type="submit">Sign In</button>

            </form>
        </div>
    );
}

export default Signupform;

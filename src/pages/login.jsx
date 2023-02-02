import React from 'react';
import "./login.css"
import { useState } from 'react';
import Signupform from '../components/signupform';
const Login = () => {
const [signin, setsignin] = useState(false);


    return (
        <div className='login_page'>
            <div className="login_background">
                <img className='Login_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />


                <button onClick={()=>setsignin(true)} className='signIn_button'>Sign In</button>
            <div className='Login_gradient'></div>
            </div>
<div className='login_body'>

   {signin?(<Signupform/>) :( <>
    <h1>Unlimited Films,TV Programmes and More</h1>
    <h2>Watch anytime, Cancle at any time.</h2>
    <p>Ready to watch? Enter Your Email to Create or Restart Your Membership</p>


<div className='login_input'>
<form action="">
<input type="email" placeholder='Email Address' />
<button onClick={()=>setsignin(true)}  className='getstarted_button'>
    Get Stated
</button>
</form>
</div>

    </>)}
</div>

        </div>
    );
}

export default Login;

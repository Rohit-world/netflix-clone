import React from 'react';
import "../pages/login.css"
import { useRef } from 'react';
import axios from 'axios';

const Signupform = () => {
const emailref=useRef(null)
const passwordref=useRef(null)

const validationCheck=()=>{
const email=emailref.current.value
const password=passwordref.current.value
    if(!email || !password){
        alert("Please fill the Credntials correctly")
    }else if(!email.includes("@")){
        alert("Email must include @")
    
    }else if(password.length<8){
        alert("Min passowrd length should be 8 ")
    }else{
       return true
    }

    return false
}

const  register=async(e)=>{
e.preventDefault()
const email=emailref.current.value
const password=passwordref.current.value
if(validationCheck()){

axios.post("https://eager-red-rattlesnake.cyclic.app/signup",{
    email,password
}).then((res)=>{
    console.log(res)
    if(res.data.msg=="User created successfull"){
        alert("Signup successfull")
    }else{
        alert(res.data.msg)
    }
}).catch((err)=>{
    if(err)alert("Something went Wrong Please Try Again")
})

}







}

const signin=(e)=>{
e.preventDefault()
}


    return (
        <div className='signup_form'>
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailref} name='email' type="email" placeholder='Email' />
                <input ref={passwordref} name='password' type="password"  placeholder='Password'/>
                <button type="submit" onClick={signin}>Sign In</button>
                <h4><span className='signup_gray'>New to Netflix? </span> <span className='signup_link' onClick={register}>Sign Up now</span> </h4>

            </form>
        </div>
    );
}

export default Signupform;

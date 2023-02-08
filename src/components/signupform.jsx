import React, { useState } from 'react';
import "../pages/login.css"
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoggedIn } from '../redux/action';
import { useDispatch } from 'react-redux';

const Signupform = () => {
const dispatch=useDispatch()
const [loading ,setloading]=useState(false)
const navigate=useNavigate()  
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
setloading(true)
axios.post("https://eager-red-rattlesnake.cyclic.app/signup",{
    email,password
}).then((res)=>{
    setloading(false)
    if(res.data.msg=="User created successfull"){
        alert("Signup successfull")
        
    }else{
        alert(res.data.msg)
    }
}).catch((err)=>{
    if(err)alert("Something went Wrong Please Try Again")
    setloading(false)
})

}







}

const signin=(e)=>{
    e.preventDefault()
    const email=emailref.current.value
    const password=passwordref.current.value
    if(validationCheck()){
    setloading(true)
    axios.post("https://eager-red-rattlesnake.cyclic.app/login",{
        email,password
    }).then((res)=>{
       setloading(false)
        
           if(res.data.token){
            dispatch(LoggedIn(res.data.token))
            navigate("/")
           }else{
            alert(res.data.msg)
           }
        
    }).catch((err)=>{
        if(err)alert("Something went Wrong Please Try Again")
        setloading(false)
    })}

}


    return (
        <div className='signup_form'>

            <form action="">
                <h1>Sign In</h1>
                <input ref={emailref} name='email' type="email" placeholder='Email' />
                <input ref={passwordref} name='password' type="password"  placeholder='Password'/>
                <button type="submit" disabled={loading} className={loading?"loadingbutton":""} onClick={signin}>Sign In</button>
                <h4><span className='signup_gray'>New to Netflix? </span> <span className='signup_link' onClick={register}>Sign Up now</span> </h4>

            </form>
        </div>
    );
}

export default Signupform;

import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../pages/login';


const PrivateRoute = ({children}) => {
let token=useSelector((state)=>state.token)

if(token){
    return children
}else{
return <Login/>
}

}

export default PrivateRoute;

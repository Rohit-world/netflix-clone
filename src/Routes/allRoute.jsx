import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/homescreen';
import Login from '../pages/login';

const AllRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    );
}

export default AllRoute;

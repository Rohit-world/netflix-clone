import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/homescreen';
import Login from '../pages/login';
import TrailerPage from '../pages/trailerPage';

const AllRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/trailer/:query' element={<TrailerPage/>}></Route>
            
            
        </Routes>
    );
}

export default AllRoute;

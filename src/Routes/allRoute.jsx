import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/homescreen';
import Login from '../pages/login';
import TrailerPage from '../pages/trailerPage';
import PrivateRoute from './privateRoute';

const AllRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<PrivateRoute><HomeScreen/></PrivateRoute>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/trailer/:query' element={<PrivateRoute><TrailerPage/></PrivateRoute>}></Route>
            
            
        </Routes>
    );
}

export default AllRoute;

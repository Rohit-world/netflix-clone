import React from 'react';
import './App.css';
import HomeScreen from './pages/homescreen';
import { userselector } from './redux/userslices';
import AllRoute from './Routes/allRoute';
import { useSelector } from 'react-redux';


function App() {
 

  return (
    <div className="App">
   
    <AllRoute/>
     
    </div>
  );
}

export default App;

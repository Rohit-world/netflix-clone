import React from 'react';
import './App.css';
import HomeScreen from './pages/homescreen';
import AllRoute from './Routes/allRoute';
import { useSelector } from 'react-redux';


function App() {
 const token=useSelector((state)=>state.token)
 console.log(token)

  return (
    <div className="App">
   
    <AllRoute/>
    </div>
  );
}

export default App;

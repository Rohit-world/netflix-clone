import { useState,useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import requests from '../functions/request';
import Slide from '../components/Slide';
import axios from 'axios';

const TrailerPage=()=>{
const [videoId,setvideoId]=useState("")
const {query}=useParams()
const key="AIzaSyBPYuyh4hQv7MgT5Hp1nFoMcihRrilJn5E"

async function fetchdata(name){
try{
axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&key=${key}&part=snippet&maxResults=1`).then((res)=>{
   let resvideoID=res.data.items[0].id.videoId
setvideoId(resvideoID)
})
}catch(err){

}
}

useEffect(() => {
  
}, [videoId]);

return(
    <div>
      <Navbar/>


<div style={{height:"100vh",paddingTop:"2%",display:"flex" }}>
      
<div style={{margin:"auto",display:"flex"}}>

<img width="200" src="https://i.ibb.co/mJ0mqDW/Rolling-1s-200px.gif" alt="Spinner-1-8s-243px" border="0" />
</div>


      </div>


      

     



    </div>
)
}

export default TrailerPage
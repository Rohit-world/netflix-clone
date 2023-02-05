import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import requests from '../functions/request';
import Slide from '../components/Slide';

const TrailerPage=()=>{
const [videoId,setvideoId]=useState("JOddp-nlNvQ")
const {query}=useParams()



useEffect(() => {
   fetchdata(query)
}, [videoId]);

return(
    <div>
      <Navbar/>

<div style={{height:"100vh",paddingTop:"2%",}}>

<div style={{display:"flex" ,height:"60%" }}>
        <iframe style={{margin:"auto"}} width="90%" height="90%" allow='autoPlay'  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} autoplay={1} 
   allowFullScreen="true"    frameborder="0"></iframe>


      </div>
      
<Slide
        title="MORE LIKE THIS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
</div>
      

     



    </div>
)
}

export default TrailerPage
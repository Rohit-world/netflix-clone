import axios from "../functions/axios";
import "./banner.css";
import requests from "../functions/request";
import React from "react";
import { useNavigate } from "react-router-dom";




const Banner = () => {

const [movie,setmovie]=React.useState([])
const navigateTO=useNavigate()
    function sliceDes(str,n){
        return str?.length>n?str.substr(0,n-1)+"....":str

    }

    const  fetchData=async()=>{
    
      let request=await axios.get(requests.fetchNetflixOriginals)
setmovie(request.data.results[
  Math.floor(Math.random()*request.data.results.length-1)
])    
        }
React.useEffect(()=>{
fetchData()
        },[])
      



  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title ||movie?.original_name}</h1>
        <div className="banner_button">
            <button onClick={()=>navigateTO(`/trailer/${movie.title||movie.original_name}`)}>Play</button>
            <button>Playlist</button>
        </div>

        <h1 className="banner_des">{sliceDes(movie?.overview,150)}</h1>
      </div>
      <div className="fade_bottom"></div>
    </header>
  );
};

export default Banner;

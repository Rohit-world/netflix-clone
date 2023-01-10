import React from "react";
import "./slide.css";
import { useEffect, useState } from "react";

import axios from "../functions/axios";
const image_base_url = `https://image.tmdb.org/t/p/original/`;

const Slide = ({ title, fetchUrl, isLarge = false }) => {
  const [Movies, setmovie] = useState([]);

  const fetchData = async () => {
    let request = await axios.get(fetchUrl);
    setmovie(request.data.results);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

 
  return (
    <div className="Slide">
      <h2>{title}</h2>
    <div className="Slide_container">  {Movies[0] && Movies.map((movie)=>(

      
      <img className={`poster ${isLarge && "largePoster"}`} key={movie.id} src={`${image_base_url}${isLarge?movie.poster_path:movie.backdrop_path}`} alt="" />
      ))}</div>
    </div>
  );
};

export default Slide;

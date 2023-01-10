import React from "react";
import "./slide.css";
import { useEffect, useState } from "react";

import axios from "../functions/axios";

const image_base_url = `https://image.tmdb.org/t/p/original/`;

const Slide = ({ title, fetchUrl, isLarge = false }) => {
  const [Movies, setmovie] = useState([]);
  const [loading,setLoading]=useState(true)
  const fetchData = async () => {
    setLoading(true)
    let request = await axios.get(fetchUrl);
    setmovie(request.data.results);
    setLoading(false)
   
    return request;

  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

if(loading){
  return(
    <div className="Slide">
      <h2>{title}</h2>
      <div className="Slide_container">
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      <div className={ `Skeleton ${isLarge && "largeSkeleton" }`}> </div>
      
      
      </div>
    </div>
  )
}


  return (
    <div className="Slide">
      <h2>{title}</h2>
      <div className="Slide_container">
        {" "}
        {Movies[0] &&
          Movies.map(
            (movie) =>
              (isLarge && movie.poster_path ||
                !isLarge && movie.backdrop_path ) && (
                <img
                  className={`poster ${isLarge && "largePoster"}`}
                  key={movie.id}
                  src={`${image_base_url}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                />
              )
          )}
      </div>
    </div>
  );
};

export default Slide;

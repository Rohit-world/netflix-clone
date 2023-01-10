import React from "react";
import "./banner.css";

const Banner = () => {

    function sliceDes(str,n){
        return str?.length>n?str.substr(0,n-1)+"....":str

    }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_button">
            <button>Play</button>
            <button>Playlist</button>
        </div>

        <h1 className="banner_des">{sliceDes(`${"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci mollitia sit, accusamus libero et modi labore eum neque totam? Soluta omnis cumque vero voluptates esse, veritatis quaerat mollitia explicabo in.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci mollitia sit, accusamus libero et modi labore eum neque totam? Soluta omnis cumque vero voluptates esse, veritatis quaerat mollitia explicabo in."}`,150)}</h1>
      </div>
      <div className="fade_bottom"></div>
    </header>
  );
};

export default Banner;

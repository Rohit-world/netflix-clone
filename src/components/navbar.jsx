
import "./navbar.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
export default function Navbar(){
    const [visible,setvisible]=useState(false);

const NavbarAnimation=()=>{
    if(window.scrollY>100){
        setvisible(true)
    }else{
        setvisible(false)
    }

}

useEffect(() => {

window.addEventListener("scroll",NavbarAnimation)

return()=>window.removeEventListener("scroll",NavbarAnimation)
}, []);


    return(
        <div className={`navbar ${visible && "black_bg"}`} >
            <div className="nav_container">
            <Link to="/"><img className="nav_logo" src="https://i.ibb.co/02gQmNN/580b57fcd9996e24bc43c529.png" alt="" />
</Link>





<Link to="/login"><img className="nav_avatar" src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg" alt="" /></Link>

            </div>
           

        </div>
    )
}
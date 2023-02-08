
import "./navbar.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoggedOut } from "../redux/action";
export default function Navbar(){


const dispatch=useDispatch()
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




<img onClick={()=>{
    alert("User Logged Out")
    window.location.reload()
}} className="nav_avatar" src="https://i.ibb.co/86Zb4Bw/logout.png" alt="" />

            </div>
           

        </div>
    )
}
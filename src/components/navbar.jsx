
import "./navbar.css"
import { useState, useEffect } from "react"
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
            <img className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />


<img className="nav_avatar" src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg" alt="" />
            </div>
           

        </div>
    )
}
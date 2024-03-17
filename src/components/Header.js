import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () =>{
    const[btnName,setBtnNmae] = useState("Login")
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo">
            {LOGO}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus?" ✅ ":" 🔴 "}</li>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contactus"}>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                    btnName === "Login" ? setBtnNmae("Logout") : setBtnNmae("Login")    
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
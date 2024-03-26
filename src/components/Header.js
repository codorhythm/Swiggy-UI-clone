import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";



const Header = () =>{
    const[btnName,setBtnNmae] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="header flex justify-around p-4 ">
            <div className="logo">
            {LOGO}
            </div>
            <div className="nav-items">
                <ul className="flex pt-2 text-gray-500">
                    <li className="px-2" >Online Status : {onlineStatus?" ✅ ":" 🔴 "}</li>
                    <li className="px-2"><Link to={"/home"}>Home</Link></li>
                    <li className="px-2"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-2"><Link to={"/contactus"}>Contact Us</Link></li>
                    <li className="px-2"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2">
                    <button className="login bg-orange-600  font-medium text-white px-2 rounded-md " onClick={()=>{
                    btnName === "Login" ? setBtnNmae("Logout") : setBtnNmae("Login")    
                    }}>{btnName}</button>
                    </li>
                    <li className="px-2">{loggedInUser}</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;
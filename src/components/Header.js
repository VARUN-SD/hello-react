import { useContext, useState } from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header=()=>{

    const {loggedInUser}=useContext(UserContext);

    const [Button,setButton]=useState("Login");

    const onlineStatus=useOnlineStatus();

    return(
        <div className="header flex justify-between bg-stone-900 text-amber-500 shadow-lg shadow-blue-200">
            <div >
                <img className="app-logo w-32" alt="app-logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-bar p-6 m-6" >
                <ul className="nav-items flex ">
                    <li className="px-3">
                        Online Status :{onlineStatus?"✅":"🚫"}
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About Us</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-3">Cart</li>
                     <button className="login-btn px-3" onClick={()=>{
                    Button==="Login"?setButton("Logout"):setButton("Login")
                }}>{Button}</button>
                <li className="px-4-">{loggedInUser}</li>
                </ul>
               
            </div>
        </div>
    )
};

export default Header;
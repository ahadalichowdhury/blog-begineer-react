import { Link } from "react-router-dom";
import React from "./topbar.css";

function Topbar() {
    const user=true;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-pinterest"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListIcon">
                        <Link to="/"className="link">HOME</Link>
                    </li>
                    <li className="topListIcon"><Link to="/"className="link">ABOUT</Link></li>
                    <li className="topListIcon"><Link to="/"className="link">CONTACT</Link></li>
                    <li className="topListIcon"><Link to="/write"className="link">WRITE</Link></li>
                    <li className="topListIcon"> {user && "LOGOUT"} </li>
                </ul>
            
            </div>
            <div className="topRight">
                {
                    user?(
                        <img className="topImage"
                        src="https://pbs.twimg.com/profile_images/1134828661306212354/wsTX4Bx1.jpg" alt="" />
                    ):(
                         <ul className="topList">
                             
                             <li className="topListIcon"><Link to="/login"className="link">LOGIN</Link></li>
                             <li className="topListIcon"> <Link to="/register" className="link">REGISTER</Link> </li>
                        </ul>
                    )
                }
              

                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}

export default Topbar;

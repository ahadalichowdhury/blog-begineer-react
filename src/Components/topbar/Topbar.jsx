import React from "./topbar.css";

function Topbar() {
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
                    <li className="topListIcon">HOME</li>
                    <li className="topListIcon">ABOUT</li>
                    <li className="topListIcon">CONTACT</li>
                    <li className="topListIcon">WRITE</li>
                    <li className="topListIcon">LOGOUT</li>
                </ul>
            
            </div>
            <div className="topRight">
                <img className="topImage"
                 src="https://pbs.twimg.com/profile_images/1134828661306212354/wsTX4Bx1.jpg" alt="" />

                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}

export default Topbar;

import React from "react";
import Style from "./style";
// import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
            <Style/>
        </div>
    )
};
export default Header
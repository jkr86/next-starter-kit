import React from "react";
import Style from "./style";
// import Link from "next/link";

const Header = () => {
    return (
        <div className="container-fluid p-0 mr-0">
            <nav className="uk-navbar-container uk-margin uk-animation-slide-top" uk-navbar="true">
                <div className="uk-navbar-left uk-margin-medium-left">
                    <a className="uk-navbar-item uk-logo" href="#">Logo</a>
                </div>
                <div className="uk-navbar-right uk-margin-medium-right">
                    <div className="uk-navbar-item ">
                        <a>About</a>
                    </div>
                    <div className="uk-navbar-item">
                        <a>News</a>
                    </div>
                    <div className="uk-navbar-item">
                        <a>Contact Us</a>
                    </div>
                </div>
            </nav>
            <Style/>
        </div>
    )
};
export default Header
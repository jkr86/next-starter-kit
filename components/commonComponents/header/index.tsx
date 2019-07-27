import React from "react";
import Style from "./style";
// import Link from "next/link";

const Header = () => {
    return (
        <div className="container-fluid p-0 mr-0">
            <nav className="uk-navbar-container uk-margin uk-animation-slide-top" uk-navbar="true">
                <div className="uk-navbar-left">

                    <a className="uk-navbar-item uk-logo" href="#">Logo</a>

                    <ul className="uk-navbar-nav">
                        <li>
                            <a href="#">
                                <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"/>
                                Features
                            </a>
                        </li>
                    </ul>

                    <div className="uk-navbar-item">
                        <div>Some <a href="#">Link</a></div>
                    </div>

                    <div className="uk-navbar-item">
                        <form action="javascript:void(0)">
                            <input className="uk-input uk-form-width-small" type="text" placeholder="Input"/>
                            <button className="uk-button uk-button-default">Button</button>
                        </form>
                    </div>

                </div>
            </nav>
            <Style/>
        </div>
    )
};
export default Header
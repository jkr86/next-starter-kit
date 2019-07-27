import React from "react";
import Style from "./style";
const Links = () => {
    return (
        <div className="container links">
            <h1>Quick Links</h1>
            <p>Inspired from ICC Cricket World Cup 2019 Official <a href="https://www.cricketworldcup.com"
                                                                    target="_blank">Website.</a></p>
            <br/>
            <div className="quick-link-container">
                <div className="quick-link">
                    <div className="background"/>
                    <a href="https://www.google.com/" target="_blank">Fixtures</a>
                </div>

                <div className="quick-link">
                    <div className="background"/>
                    <a href="https://www.google.com/" target="_blank">Videos</a>
                </div>

                <div className="quick-link">
                    <div className="background"/>
                    <a href="https://www.google.com/" target="_blank">Tickets</a>
                </div>

                <div className="quick-link">
                    <div className="background"/>
                    <a href="https://www.google.com/" target="_blank">Teams</a>
                </div>

                <div className="quick-link">
                    <div className="background"/>
                    <a href="https://www.google.com/" target="_blank">News</a>
                </div>
            </div>
            <Style/>
        </div>
    )
};
export default Links;
import React from "react";
import Head from "next/head";
import Header from "../commonComponents/header";
import Footer from "../commonComponents/footer"

export default (props) => (
    <div>
        <Head>
            <title>Next UI_Kit</title>
            <link rel="shortcut icon" href="/static/heart.ico" />
            <link rel="stylesheet" href="/static/css/style.css"/>
            <link rel="stylesheet" href="/static/css/uikit.min.css"/>
            <script type="text/javascript" src="/static/js/uikit.min.js"/>
            <script type="text/javascript" src="/static/js/uikit-icons.min.js"/>
            <link rel="stylesheet" href="/static/css/responsive.css"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600&display=swap" rel="stylesheet"/>
        </Head>
        <Header/>
        {props.children}
        <Footer/>
    </div>
)
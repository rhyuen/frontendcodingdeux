import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from "./app.jsx";
import Login from "./login.jsx";
import Footer from "./footer.jsx";


const style = {
    background: "white"
};

const Controller = () => (
    <Router>
        <div style = {style}>
            <div className = "nav">                
                <span><Link to = "/">Home</Link></span>
                <span><Link to = "/login">Login</Link></span>                                
            </div>            
            <Route exact path = "/" component = {App}/>
            <Route path = "/login" component = {Login}/>
            <Footer/>
        </div>
    </Router>    
)

export default Controller;
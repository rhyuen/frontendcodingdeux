import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from "./app.jsx";
import Login from "./login.jsx";
import Footer from "./footer.jsx";


const Controller = () => (
    <Router>
        <div className = "root">
            <div className = "nav">   
                <div className = "nav__container">
                    <span><Link to = "/">Home</Link></span>
                    <span><Link to = "/login">Login</Link></span>
                </div>
            </div>         
            <div className = "routed">
                <Route exact path = "/" component = {App}/>
                <Route path = "/login" component = {Login}/>
                <Footer/>
            </div>
        </div>
    </Router>    
)

export default Controller;
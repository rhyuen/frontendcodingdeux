import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from "./app.jsx";
import Login from "./login.jsx";
import Masonry from "./masonry.jsx";
import Footer from "./footer.jsx";
import NotesApp from "./notesapp.jsx";


const Controller = () => (
    <Router>
        <div className = "root">
            <div className = "nav">   
                <div className = "nav__container">
                    <span><Link to = "/">Home</Link></span>
                    <span><Link to = "/login">Login</Link></span>
                    <span><Link to = "/masonry">Masonry</Link></span>
                    <span><Link to = "/notes">Notes</Link></span>
                </div>
            </div>         
            <div className = "routed">
                <Route exact path = "/" component = {App}/>
                <Route path = "/login" component = {Login}/>
                <Route path = "/masonry" component = {Masonry}/>
                <Route path = "/notes" component = {NotesApp}/>
                <Footer/>
            </div>
        </div>
    </Router>    
)

export default Controller;
import React, {Component} from "react";

export default () => (
    <div className = "login">
        <h1 className = "login__header">Login</h1>
        <div className = "login__container">
            <div className = "login__container__field">
                <input className = "login__input" type = "text" />
            </div>
            <div className = "login__container__field">
                <input className = "login__input" type = "text" />
            </div>
            <div className = "login__container__field">            
                <input className = "login__submit" type = "submit" value = "login"/>
            </div>
        </div>
    </div>
);

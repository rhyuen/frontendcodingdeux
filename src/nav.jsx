import React, {Component} from "react";


const paths = [
    {name: "Home", path: "/"},
    {name: "Login", path: "/login"}
];

const style = {
    background: "olive",
    width: "100%",
    display: "flex",
    height: "5%",
    justifyContent: "center"
};

const innerNavStyle = {
    width: "730px",
    background: "red",
    display: "flex",    
    fontFamily: "Helvetica",
    textTransform: "uppercase",
    alignItems: "center"
};

export default () => (
    <div style = {style}>
        <div style = {innerNavStyle}>
            {
                paths.map((item, index) => {
                    return (
                        <span key = {index}>
                            <a href = {item.path}>
                                {item.name}
                            </a>
                        </span>
                    );
                })
            }
        </div>
    </div>
);
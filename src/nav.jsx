import React, {Component} from "react";


const paths = [
    {name: "Home", path: "/"},
    {name: "Login", path: "/login"}
];

export default () => (
    <div className = "nav">
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
);
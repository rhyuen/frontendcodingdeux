import React, {Component} from "react";
import Entry from "./entry.jsx";

export default (props) => (
    <div className = "entrylist">
        <h2>{props.entries.length} Items Remaining</h2>
        <div>
            {
                props.entries.map((entry, index) => {
                    return (
                        <Entry entry = {entry} index = {index}/>
                    );
                })
            }
        </div>      
    </div>
);
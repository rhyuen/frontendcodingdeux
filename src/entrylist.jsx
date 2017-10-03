import React, {Component} from "react";
import Entry from "./entry.jsx";

export default ({entries}) => (
    <div className = "entrylist">
        <h2>{entries.length} Items Remaining</h2>
        <div>
            {
                entries.map((entry, index) => <Entry entry = {entry} index = {index}/>)                
            }
        </div>      
    </div>
);
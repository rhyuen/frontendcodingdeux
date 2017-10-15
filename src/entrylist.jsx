import React, {Component} from "react";
import Entry from "./entry.jsx";

export default ({entries, onTitleClick}) => (
    <div className = "entrylist">        
        <div>
            {
                entries.map(entry => <Entry entry = {entry} key = {entry.id} onTitleClick = {onTitleClick}/>)                
            }
        </div>      
    </div>
);
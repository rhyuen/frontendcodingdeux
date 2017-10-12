import React, {Component} from "react";
import Entry from "./entry.jsx";

export default ({entries, onTitleClick}) => (
    <div className = "entrylist">        
        <div>
            {
                entries.map((entry) => {
                    if(entry.visible === false){
                        return <Entry entry = {entry} key = {entry.id} onTitleClick = {onTitleClick}/>;
                    }
                })                
            }
        </div>      
    </div>
);
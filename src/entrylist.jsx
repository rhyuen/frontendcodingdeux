import React, {Component} from "react";

const style = {
    width: "730px",
    background: "brown"    
};
const entryStyle = {
    display: "flex",
    flexGrow: "1",
    justifyContent: "space-between"
};

export default (props) => (
    <div style = {style}>
        <h2>{props.entries.length} Items Remaining</h2>
        <div>
            {
                props.entries.map((entry, index) => {
                    return (
                        <div name = {entry.title} key = {index} style = {entryStyle}>
                            <span>
                                <label><input type = "checkbox"/><strong>{entry.title}</strong></label><br/>
                                <div>{entry.textarea}</div>
                            </span>
                            <span>
                                {entry.textarea.length}
                            </span>
                        </div>
                    );
                })
            }
        </div>      
    </div>
);
import React, {Component} from "react";

const style = {
    width: "590px",
    background: "brown"    
};

export default (props) => (
    <div style = {style}>
        <h2>{props.entries.length} Items Remaining</h2>
        <div>
            {
                props.entries.map((entry, index) => {
                    return (
                        <div name = {entry.title} key = {index} className = "entry">
                            <span className = "entry__main">
                                <label><input type = "checkbox"/><strong>{entry.title}</strong></label><br/>
                                <div className = "entry__main__content">{entry.textarea}</div>
                                <div className = "entry__main__tags">{entry.textarea.split(" ").filter((item) => item.length > 9)}</div>
                            </span>
                            <span className = "entry__meta">
                                {entry.textarea.length}
                            </span>
                        </div>
                    );
                })
            }
        </div>      
    </div>
);
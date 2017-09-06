import React, {Component} from "react";

export default (props) => (
    <div>
        <h2>{props.entries.length} Items Remaining</h2>
        <div>
            {
                props.entries.map((entry, index) => {
                    return (
                        <div name = {entry.value} key = {index}>
                            <label><input type = "checkbox"/>{entry.value}</label><br/>
                            <div>{entry.textarea}</div>
                        </div>
                    );
                })
            }
        </div>      
    </div>
);
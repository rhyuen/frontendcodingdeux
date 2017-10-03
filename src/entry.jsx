import React, {Component} from "react";

export default (props) => (
    <div name = {props.entry.title} key = {props.index} className = "entry">
        <span className = "entry__main">
            <EntryTitle title = {props.entry.title}/>
            <div className = "entry__main__content">{props.entry.textarea}</div>
            <div className = "entry__main__tags">
                {props.entry.textarea.split(" ").filter((item) => item.length > 11)}
            </div>
           <EntryButtons/>
        </span>
        <span className = "entry__meta">
            {props.entry.textarea.length}
        </span>
    </div>
);

const EntryTitle = (props) => (
    <div className = "entry__main__title">
        <label>
            <input type = "button" className = "entry__main__title__checkbox"/>
                <strong>{props.title}</strong>
        </label>
    </div>
);

const EntryButtons = (props) => (
    <div className = "entry__main__buttons">
        <span className = "entry__main__buttons__item">
            <input className = "entry__main__buttons__item__button" type = "button" name = "like"/>
        </span>
        <span className = "entry__main__buttons__item">
            <input className = "entry__main__buttons__item__button" type = "button" name = "like"/>
        </span>
        <span className = "entry__main__buttons__item">
            <input className = "entry__main__buttons__item__button" type = "button" name = "like"/>
        </span>
    </div>
);
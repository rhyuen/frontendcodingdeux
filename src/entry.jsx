import React, {Component} from "react";

export default ({entry, onTitleClick}) => (
    <div name = {entry.title} className = "entry">
        <span className = "entry__main">
            <EntryTitle title = {entry.title} onTitleClick = {onTitleClick} id = {entry.id}/>
            <div className = "entry__main__content">{entry.textarea}</div>
            <div className = "entry__main__tags">
                <div className = "entry__main__tags__item">
                    {entry.textarea.split(" ").filter((item) => item.length > 11)}
                </div>
            </div>
           <EntryButtons/>
        </span>        
    </div>
);

const EntryTitle = ({title, onTitleClick, id}) => (
    <div className = "entry__main__title" id = {id} onClick = {onTitleClick.bind(this, id)}>
        <label>
            <input type = "button" className = "entry__main__title__checkbox"/>
                <strong>{title}</strong>
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
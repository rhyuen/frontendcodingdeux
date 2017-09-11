import React, {Component} from "react";

class EntryForm extends Component{
    
    handleFormChange = (event) => {
        this.props.formChange(event.target.value);
    }
    handleTextareaChange = (event) => {
        this.props.textareaChange(event.target.value);
    }

    render(){                        
    
        return (
            <div className = "container">
                <form onSubmit = {this.props.formSubmit} className = "container__form">
                    <div className = "container__form__title">
                        <input type = "text" 
                        className = "container__form__title__input"
                        value = {this.props.formValue} 
                        onChange = {this.handleFormChange}/>
                    </div>
                    <div className = "container__form__textarea">
                        <textarea value = {this.props.formContent} 
                        onChange = {this.handleTextareaChange}                        
                        rows = "3"
                        cols = "60"/>
                    </div>
                    <div className = "container__form__bottom">
                        <span>{150 - this.props.formContent.length} characters left</span>
                        <span><input type = "submit" value = "Submit"/></span>
                    </div>                
                </form>
            </div>
        );
    }
}

export default EntryForm;
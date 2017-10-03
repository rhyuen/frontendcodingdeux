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
                        />
                    </div>
                    <div className = "container__form__bottom">
                        <span className = "container__form__bottom__char">
                            {150 - this.props.formContent.length} characters left
                        </span>                        
                        <input className = "container__form__bottom__submit" type = "submit" value = "Submit"/>
                    </div>                
                </form>
            </div>
        );
    }
}

export default EntryForm;
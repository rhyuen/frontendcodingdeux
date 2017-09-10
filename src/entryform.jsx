import React, {Component} from "react";

class EntryForm extends Component{
    
    handleFormChange = (event) => {
        this.props.formChange(event.target.value);
    }
    handleTextareaChange = (event) => {
        this.props.textareaChange(event.target.value);
    }

    render(){
        const formStyle = {
            display: "flex",
            flexDirection: "column",
            width: "730px",            
        };

        const titleStyle = {
            width: "100%",
            background: "red"
        };
        const inputTitleStyle = {
            width: "100%"
        };        

        const textAreaStyle = {
            width: "100%",
            background: "pink"
        };
        const textAreaInputStyle = {
            width: "100%"            
        };

        const submitRowStyle = {
            display: "flex",
            justifyContent: "space-between"
        };

        return (
            <form onSubmit = {this.props.formSubmit} style = {formStyle}>
                <div style = {titleStyle}>
                    <input type = "text" 
                    value = {this.props.formValue} 
                    onChange = {this.handleFormChange}
                    style = {inputTitleStyle}/>
                </div>
                <div style = {textAreaStyle}>
                    <textarea value = {this.props.formContent} 
                    onChange = {this.handleTextareaChange}
                    style = {textAreaInputStyle}
                    rows = "4"
                    cols = "50"/>
                </div>
                <div style = {submitRowStyle}>
                    <span>{150 - this.props.formContent.length} characters left</span>
                    <span><input type = "submit" value = "Submit"/></span>
                </div>                
            </form>
        );
    }
}

export default EntryForm;
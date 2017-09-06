import React, {Component} from "react";

class EntryForm extends Component{
    
    handleFormChange = (event) => {
        this.props.formChange(event.target.value);
    }
    handleTextareaChange = (event) => {
        this.props.textareaChange(event.target.value);
    }

    render(){
        const style = {
            display: "flex",
            flexDirection: "column"
        };

        return (
            <form onSubmit = {this.props.formSubmit} style = {style}>
                <input type = "text" value = {this.props.formValue} onChange = {this.handleFormChange}/>
                <textarea value = {this.props.formContent} onChange = {this.handleTextareaChange}/>
                <input type = "submit" value = "Submit"/>
            </form>
        );
    }
}

export default EntryForm;
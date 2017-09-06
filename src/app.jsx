import React, {Component} from "react";
import EntryList from "./entrylist.jsx";
import EntryForm from "./entryform.jsx";
import Nav from "./nav.jsx";

class App extends Component{
    state = {
        value: "",
        textarea: "",
        events: [
            {value: "First One", textarea: "oneoneoneoen", done: false}, 
            {value: "Second One", textarea: "twotawdfasdf", done: false}, 
            {value: "third 333", textarea: "thereasdfdfasdif", done: false},
            {value: "Four444", textarea: "fourasdfasdgh", done: false}
        ]
    }
    

    handleSubmit = (event) => {
        event.preventDefault();        
        this.setState((prevState, props) => ({            
            value: "",
            textarea: "",
            events: prevState.events.concat({
                done: false, 
                value: this.state.value,
                textarea: this.state.textarea
            })
        }));
    }

    handleChange = (event) => {        
        this.setState((prevState, props) => {
            return {
                value: event,
                textarea: prevState.textarea,
                events: prevState.events
            };
        });
    }

    handleTextareaChange = (event) => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value,
                events: prevState.events,
                textarea: event                
            };
        });
    }
        
    render(){
        const style = {
            background: "orange",            
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            display: "flex"
        };

        return (
            <div style = {style}>
                <Nav/>                
                <EntryForm formValue = {this.state.value} 
                    formSubmit = {this.handleSubmit} 
                    formChange = {this.handleChange}
                    formContent = {this.state.textarea}
                    textareaChange = {this.handleTextareaChange}/>
                <EntryList entries={this.state.events}/>                
            </div>
        );
    }
}

export default App;
import React, {Component} from "react";
import EntryList from "./entrylist.jsx";
import EntryForm from "./entryform.jsx";
import Nav from "./nav.jsx";

class App extends Component{
    state = {
        title: "",
        textarea: "",
        events: [
            {title: "First One", textarea: "To work with Kubernetes, you use Kubernetes API objects to describe your cluster’s desired state: what applications or other workloads you want to run, what container images they use, the number of replicas, what network and disk resources you want to make available, ", done: false}, 
            {title: "SEcond", textarea: "ernetes contains a number of abstractions that represent the state of your system: deployed containerized applications and workloads, their associated network and disk resources, and other information about what your cluste", done: false}, 
            {title: "third 333", textarea: "he Kubernetes master is responsible for maintaining the desired state for your cluster. When you interact with Kubernetes, such as by using the kubectl command-line interface, you’re communicating with your cluste", done: false},
            {title: "Four444", textarea: "des in a cluster are the machines (VMs, physical servers, etc) that run your appl", done: false}
        ]
    }
    

    handleSubmit = (event) => {
        event.preventDefault();        
        this.setState((prevState, props) => ({            
            title: "",
            textarea: "",
            events: prevState.events.concat({
                done: false, 
                title: this.state.title,
                textarea: this.state.textarea
            })
        }));
    }

    handleChange = (event) => {        
        this.setState((prevState, props) => {
            return {
                title: event,
                textarea: prevState.textarea,
                events: prevState.events
            };
        });
    }

    handleTextareaChange = (event) => {
        this.setState((prevState, props) => {
            return {
                title: prevState.title,
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
                <div>     
                    <EntryForm formValue = {this.state.title} 
                        formSubmit = {this.handleSubmit} 
                        formChange = {this.handleChange}
                        formContent = {this.state.textarea}
                        textareaChange = {this.handleTextareaChange}/>
                    <EntryList entries={this.state.events}/>                
                </div>
                <div></div>
            </div>
        );
    }
}

export default App;
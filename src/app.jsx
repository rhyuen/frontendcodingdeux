import React, {
    Component
} from "react";
import EntryList from "./entrylist.jsx";
import EntryForm from "./entryform.jsx";
import uuid from "uuid";

class App extends Component {
    state = {
        title: "",
        textarea: "",
        events: [{
                id: uuid.v4(),
                title: "First One",
                textarea: "To work with Kubernetes, you use Kubernetes ",
                visible: false
            },
            {
                id: uuid.v4(),
                title: "SEcond",
                textarea: "ernetes contains a number of abstractions that ",
                visible: false
            },
            {
                id: uuid.v4(),
                title: "third 333",
                textarea: "he Kubernetes master is responsible for ",
                visible: false
            },
            {
                id: uuid.v4(),
                title: "Four444",
                textarea: "des in a cluster are the machines (VMs",
                visible: false
            }
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
                ...prevState,
                title: event
            };
        });
    }

    handleTextareaChange = (event) => {
        if (event.length > 150) {
            return;
        }
        this.setState((prevState, props) => {
            return {
                ...prevState,
                textarea: event
            };
        });
    }

    handleEntryTitleClick = (id, e) => {        
        console.log(e);
        console.log("HandleEntryTitleClick %s", id);
        console.log("ID %s", e.target.id);
        this.setState(prevState => {
            const latest = Object.assign({}, prevState.events[id], {visible: !prevState.visible});
            console.log(latest);
            console.log("in scope");
            return {
                ...prevState,
                events: prevState.events.filter(evt => evt.id !== id).concat(latest)
            };
        });
    }

    render() {
        return ( 
            <div className = "main" >
                <div className = "main__side" >
                    <div className = "main__side__container"> Side Comp </div>
                </div> 
                <div className = "main__center">
                    <div className = "main__center__entry">
                        <EntryForm 
                            formValue = {this.state.title}
                            formSubmit = {this.handleSubmit}
                            formChange = {this.handleChange}
                            formContent = {this.state.textarea}
                            textareaChange = {this.handleTextareaChange}/> 
                        <EntryList 
                            entries = {this.state.events}
                            onTitleClick = {this.handleEntryTitleClick}/>
                    </div>
                </div>
                <div className = "main__side" >
                    <div className = "main__side__container"> Side Comp </div> 
                    <div className = "main__side__container" >Side Comp </div>
                </div>
            </div>
        );
    }
}

export default App;
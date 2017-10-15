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
                title: "First One is the HAProxy",
                textarea: "To work with Kubernetes, you use Kubernetes ",
                timeStamp: new Date().toLocaleString(),
                visible: true
            },
            {
                id: uuid.v4(),
                title: "SEcond is the Namtab",
                textarea: "ernetes contains a number of abstractions that ",
                timeStamp: new Date().toLocaleString(),
                visible: true
            },
            {
                id: uuid.v4(),
                title: "third 333 is the Swarm that approaches.",
                textarea: "he Kubernetes master is responsible for ",
                timeStamp: new Date().toLocaleString(),
                visible: false
            },
            {
                id: uuid.v4(),
                title: "Four444 is the number of OSes that exist.",
                textarea: "des in a cluster are the machines (VMs",
                timeStamp: new Date().toLocaleString(),
                visible: true
            }
        ]
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((prevState, props) => ({
            title: "",
            textarea: "",
            events: prevState.events.concat({
                id: uuid.v4(),
                visible: true,
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

    //the Stete update logic is incorrect
    handleEntryTitleClick = (id, e) => {        
        console.log(e);
        e.stopPropagation();
    
        console.log("HandleEntryTitleClick %s", id);
        console.log("ID %s", e.target.id);
        this.setState(prevState => {
            const elementToUpdate = prevState.events.filter(evt => evt.id === id)[0];
            const beforeLatest = prevState.events.slice(0, id);
            const latest = Object.assign({}, elementToUpdate, {visible: !elementToUpdate.visible});
            const afterLatest = prevState.events.splice(id+1);            
            const nextState = beforeLatest.concat(latest).concat(afterLatest);
            console.log(latest);
            console.log("in scope");
            return {
                ...prevState,
                events: nextState
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
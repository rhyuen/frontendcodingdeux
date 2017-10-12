import React, {Component} from "react";
import uuid  from "uuid";

const Note = ({task, onDelete}) => (
    <div>
        <span>{task}</span>
        <button onClick = {onDelete}>x</button>
    </div>
);

const Notes = ({notes, onDelete}) => (    
    <ul>{notes.map(note => 
        <li key = {note.id}>
            <Note 
                onDelete = {onDelete.bind(null, note.id)}
                task = {note.task}/>
        </li>
    )}</ul>
);
class NotesApp extends Component{
    state = {
        notes: [{
            id: 1,
            task: "First Task"
        }, {
            id: 2,
            task: "Second Task"
        }, {
            id: 3,
            task: "Third Task"
        }]
    }       
    
    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([
                {id: uuid.v4(), task: "Latest Task"}
            ])
        });
    }

    deleteNote = (id, e) => {
        e.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    render(){        

        return (
            <div>
                <button onClick = {this.addNote}>
                    Add
                </button>
                <Notes 
                    notes = {this.state.notes}
                    onDelete = {this.deleteNote}/>
            </div>
        );
    } 
}

export default NotesApp;
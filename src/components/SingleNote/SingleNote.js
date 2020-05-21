import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import NotefulContext from '../../NotefulContext';

class SingleNote extends Component {
    static contextType = NotefulContext;

    deleteNoteRequest(noteId, callback) {
        const baseUrl = 'http://localhost:9090/notes/' + noteId;
        fetch(baseUrl, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
        return res.json();
        })
        .then(data => {
            callback(noteId)
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        const currentNote = this.context.notes.find(note => note.id === this.props.noteId);
        
        if(currentNote === undefined) {
            return <Redirect to="/" />
        }
        
        const date = new Date(currentNote.modified);
        return (
            <NotefulContext.Consumer>
                {(context) => (
                <>
                    <div className="note-container">
                        <NavLink to={`/note/${this.props.noteId}`} className="note-link">{currentNote.name}</NavLink>
                        <div className="note-bottom">
                            <div className="note-mod">{date.toLocaleString()}</div>
                            <button 
                                className="note-delete" 
                                onClick={() => {
                                    this.deleteNoteRequest(currentNote.id, context.deleteNote)
                                }}>Delete Note</button>
                        </div>
                    </div>
                    <div className="note-content">
                        <p>{currentNote.content}</p>
                    </div>
                </>
            )}
            </NotefulContext.Consumer>
        )
    }
}

export default SingleNote;



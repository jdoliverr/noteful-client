import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../../NotefulContext'

class SingleNote extends Component {
    static contextType = NotefulContext;

    render() {
        const currentNote = this.context.notes.find(note => note.id === this.props.noteId);
        const date = new Date(currentNote.modified);
        return (
            <>
                <div className="note-container">
                    <NavLink to={`/note/${this.props.noteId}`} className="note-link">{currentNote.name}</NavLink>
                    <div className="note-bottom">
                        <div className="note-mod">{date.toLocaleString()}</div>
                        <button className="note-delete">Delete Note</button>
                    </div>
                </div>
                <div className="note-content">
                    <p>{currentNote.content}</p>
                </div>
            </>
        )
    }
}

export default SingleNote;



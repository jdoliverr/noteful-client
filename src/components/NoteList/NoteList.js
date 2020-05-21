import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext';
import Note from '../Note/Note';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import { NavLink } from 'react-router-dom'

class NoteList extends Component {
    static contextType = NotefulContext;

    render() {
        let newNotes = [];

        if(this.context.addingNote) {
            return (
                <section className="main-note-container">
                    <AddNoteForm {...this.props} />
                </section>
            )
        }

        if(this.props.folderId === undefined) {
            newNotes = this.context.notes;
        } else {
            newNotes = this.context.notes.filter(note => note.folderId === this.props.folderId)
        }

        const notes = newNotes.map(note => {
            const date = new Date(note.modified);
            return <Note name={note.name} key={note.id} id={note.id} folderId={note.folderId} date={date.toLocaleString()} />
        })
        
        return (
            <NotefulContext.Consumer>
                {(context) => (
                    <section className="main-note-container">
                        {notes}
                        <NavLink to="/add-note" className="note-add" onClick={context.toggleAddingNote}>Add note</NavLink>

                    </section>
                )}
            </NotefulContext.Consumer>
        )
    }
}

export default NoteList;
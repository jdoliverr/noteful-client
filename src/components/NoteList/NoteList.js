import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext';
import Note from '../Note/Note';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import NotefulError from '../NotefulError/NotefulError';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

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
            return (
                <NotefulError key={'NE'+ note.id}>
                    <Note name={note.name} key={note.id} id={note.id} folderId={note.folderId} date={date.toLocaleString()} />
                </NotefulError>
            )
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

NoteList.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
    folderId: PropTypes.string
}

export default NoteList;
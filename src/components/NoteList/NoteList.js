import React, { Component } from 'react';
import Note from './Note/Note';

class NoteList extends Component {
    render() {
        const notes = this.props.notes.map(note => {
            const date = new Date(note.modified);

            if(this.props.folderId === 'all') {
                return <Note name={note.name} key={note.id} date={date.toLocaleString()} />
            } else if(note.folderId === this.props.folderId) {
                console.log(`Note ID = Folder ID`);
                return <Note name={note.name} key={note.id} date={date.toLocaleString()} />
            }
            
            
        })

        return (
            <section className="main-note-container">
                {notes}
                <button className="note-add">Add note</button>
            </section>
        )
    }
}

export default NoteList;
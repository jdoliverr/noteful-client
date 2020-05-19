import React, { Component } from 'react';

class NoteList extends Component {


    render() {

        const notes = this.props.notes.map(note => {
            const date = new Date(note.modified);
            return (
                <div className="note-container" key={note.id}>
                    <a href="/note" class="note-link">{note.name}</a>
                    <div className="note-bottom">
                        <div className="note-mod">Date Modified: {date.toLocaleString()}</div>
                        <button className="note-delete">Delete Note</button>
                    </div>
                </div>
            )
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
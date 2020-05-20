import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NoteList extends Component {


    render() {
        const noteId = this.props.id;
        return (
            <div className="note-container">
                <NavLink to={`/note/${noteId}`} className="note-link">{this.props.name}</NavLink>
                <div className="note-bottom">
                    <div className="note-mod">Date Modified: {this.props.date}</div>
                    <button className="note-delete">Delete Note</button>
                </div>
            </div>
        )
    }
}

export default NoteList;

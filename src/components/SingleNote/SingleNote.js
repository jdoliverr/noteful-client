import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SingleFolder extends Component {
    render() {
        const date = new Date(this.props.currentNote.modified);
        return (
            <>
                <div className="note-container">
                    <NavLink to={`/note/${this.props.currentNote.id}`} className="note-link">{this.props.currentNote.name}</NavLink>
                    <div className="note-bottom">
                        <div className="note-mod">{date.toLocaleString()}</div>
                        <button className="note-delete">Delete Note</button>
                    </div>
                </div>
                <div className="note-content">
                    <p>{this.props.currentNote.content}</p>
                </div>
            </>
        )
    }
}

export default SingleFolder;



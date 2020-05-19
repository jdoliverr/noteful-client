import React, { Component } from 'react';

class NoteList extends Component {


    render() {
        return (
            <div className="note-container">
                <a href="/note" className="note-link">{this.props.name}</a>
                <div className="note-bottom">
                    <div className="note-mod">Date Modified: {this.props.date}</div>
                    <button className="note-delete">Delete Note</button>
                </div>
            </div>
        )
    }
}

export default NoteList;
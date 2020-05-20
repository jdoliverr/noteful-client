import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext'

class SingleFolder extends Component {
    static contextType = NotefulContext;

    render() {
        const currentNote = this.context.notes.find(note => note.id === this.props.noteId);
        const currentFolder = this.context.folders.find(folder => folder.id === currentNote.folderId);
        return (
            <div className="note-view-folder-container">
                <a onClick={this.props.onHomeClick} className="folder-back">Go Back</a>
                <h2 className="folder-header">{currentFolder.name}</h2>
            </div> 

        )
    }
}

export default SingleFolder;
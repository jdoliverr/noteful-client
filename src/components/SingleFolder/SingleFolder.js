import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import NotefulContext from '../../NotefulContext';

class SingleFolder extends Component {
    static contextType = NotefulContext;

    render() {
        const currentNote = this.context.notes.find(note => note.id === this.props.noteId);
        if(currentNote === undefined) {
            return <Redirect to="/" />;
        }
        
        const currentFolder = this.context.folders.find(folder => folder.id === currentNote.folderId);
        return (
            <div className="note-view-folder-container">
                <NavLink to="/" className="folder-back">Go Back</NavLink>
                <h2 className="folder-header">{currentFolder.name}</h2>
            </div> 

        )
    }
}

export default SingleFolder;
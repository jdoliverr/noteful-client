import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import NotefulContext from '../../NotefulContext';
import NotefulError from '../NotefulError/NotefulError';
import PropTypes from 'prop-types';

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
                <NotefulError>
                    <h2 className="folder-header">{currentFolder.name}</h2>
                </NotefulError>
            </div> 
        )
    }
}

SingleFolder.propTypes = {
    noteId: PropTypes.string
}

export default SingleFolder;
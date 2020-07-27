import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../../NotefulContext';
import PropTypes from 'prop-types';

class Note extends Component {

    deleteNoteRequest(noteId, callback) {
        const baseUrl = 'http://localhost:8000/api/notes/' + noteId;
        console.log(baseUrl)
        fetch(baseUrl, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
        return res.json();
        })
        .then(data => {
            callback(noteId)
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        const noteId = this.props.id;
        return (
            <NotefulContext.Consumer>
                {(context) => (
                <div className="note-container">
                    <NavLink to={`/note/${noteId}`} className="note-link">{this.props.name}</NavLink>
                    <div className="note-bottom">
                        <div className="note-mod">Date Modified: {this.props.date}</div>
                        <button 
                            className="note-delete" 
                            onClick={() => {
                                this.deleteNoteRequest(noteId, context.deleteNote)
                            }}>Delete Note</button>
                    </div>
                </div>
            )}
            </NotefulContext.Consumer>
        )
    }
}

Note.propTypes = {
    date: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: (props, propName, componentName) => {
        const prop = props[propName];
        if(!prop) {
            return new Error(`${propName} is required in ${componentName}. Validation Failed`);
        }
        if (typeof prop != 'string') {
            return new Error(`Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`);
        }
        if (prop.length === 0) {
        return new Error(`Invalid prop, ${propName} must be entered. Validation Failed.`);
        }
    }
}

export default Note;

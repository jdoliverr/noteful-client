import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext';
import PropTypes from 'prop-types';

class AddNoteForm extends Component {
    static contextType = NotefulContext;

    constructor(props) {
        super(props);
        this.noteNameInput = React.createRef();
        this.folderInput = React.createRef();
        this.noteDescription = React.createRef();
    }

    handleAddNote(event, callback) {
        event.preventDefault();
        const noteName = this.noteNameInput.current.value;
        const noteDesc = this.noteDescription.current.value;
        let time = new Date();
        time = time.toLocaleString();
        const folderName = this.folderInput.current.value;
        const folder = this.context.folders.find(folder => folder.name === folderName);
        const currentFolderId = folder.id;


        const baseUrl = 'http://localhost:8000/api/notes';
        let noteBody = {
            'name': noteName,
            'folderId': currentFolderId,
            'modified': time,
            'content': noteDesc
        };
        noteBody = JSON.stringify(noteBody);

        const options = {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: noteBody
        };
        console.log('Note: ', noteBody);

        fetch(baseUrl, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.status)
                }
                return res.json();
            })
            .then(data => {
                callback(data);
                this.props.history.push('/');
            })
            .catch(err => console.log(err.message));

    }
    render() {
        const options = this.context.folders.map(folder => {
            return <option key={folder.id} value={folder.name}>{folder.name}</option>
        })

        return (
            <NotefulContext.Consumer>
                {(context) => (
                    <>
                        <form id="note-form" onSubmit={e => this.handleAddNote(e, context.addNote)}>
                            <div className="note-container">
                                <h3 className="note-header">New Note</h3>
                                <input type="text" id="note-name" name="note-name" placeholder="Note Name Here" ref={this.noteNameInput} required />
                                <h3 className="note-header">Select Folder</h3>
                                <select id="folder-select" name="folder-select" ref={this.folderInput} required>
                                    {options}
                                </select>
                            </div>
                            <div className="note-content">
                                <h3 className="note-header">Note Content</h3>
                                <textarea className="note-description" ref={this.noteDescription} required>
                                </textarea>
                            </div>
                            <button type="submit" className="note-add">Submit</button>
                        </form>
                    </>
                )}
            </NotefulContext.Consumer>
        )
    }
}

AddNoteForm.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object
}

export default AddNoteForm;
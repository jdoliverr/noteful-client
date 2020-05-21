import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext';

class AddNoteForm extends Component {

    render() {
        return (
            <>
                <form id="note-form">
                    <div className="note-container">
                        <h3 className="note-header">New Note</h3>
                        <input type="text" id="note-name" name="note-name" placeholder="Note Name Here" required />
                        <h3 className="note-header">Select Folder</h3>
                        <select id="folder-select" name="folder-select" required>
                            <option disabled selected>Choose Folder</option>
                            <option value="folder-name">Folder 1</option>
                            <option value="folder-name">Folder 2</option>
                            <option value="folder-name">Folder 3</option>
                        </select>
                    </div>
                    <div className="note-content">
                        <h3 className="note-header">Note Content</h3>
                        <textarea className="note-description" required>
                        </textarea>
                    </div>
                    <button type="submit" className="note-add">Submit</button>
                </form>
            </>
        )
    }
}

export default AddNoteForm;
import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext';

class AddFolderForm extends Component {

    render() {
        return (
            <>
                <div className="folder-container">
                    <form id="folder-form">
                        <h3 className="folder-header">New Folder</h3>
                        <input type="text" id="folder-name" name="folder-name" placeholder="Folder Name Here" />
                        <div className="button-container">
                            <button type="submit" className="folder-add">Submit</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default AddFolderForm;
import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext';
import PropTypes from 'prop-types';

class AddFolderForm extends Component {
    constructor(props) {
        super(props);
        this.folderInput = React.createRef();
    }

    handleAddFolder(event, callback) {
        event.preventDefault();
        const folder = this.folderInput.current.value;
        const baseUrl = 'http://localhost:8000/api/folders';
        let folderBody = {
            'name': folder
        };
        folderBody = JSON.stringify(folderBody);

        const options = {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: folderBody
        };
        console.log('Folder: ', folder);

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
        return (
            <NotefulContext.Consumer>
                {(context) => (
                    <div className="folder-container">
                        <form id="folder-form" onSubmit={e => this.handleAddFolder(e, context.addFolder)}>
                            <h3 className="folder-header">New Folder</h3>
                            <input type="text" id="folder-name" name="folder-name" placeholder="Folder Name Here" ref={this.folderInput} required/>
                            <div className="button-container">
                                <button type="submit" className="folder-add">Submit</button>
                            </div>
                        </form>
                    </div>
                )}
            </NotefulContext.Consumer>
        )
    }
}

AddFolderForm.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object
}

export default AddFolderForm;
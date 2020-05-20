import React, { Component } from 'react';

class SingleFolder extends Component {
    render() {
        return (
            <div className="note-view-folder-container">
                <a onClick={this.props.onHomeClick} className="folder-back">Go Back</a>
                <h2 className="folder-header">{this.props.currentFolder.name}</h2>
            </div> 

        )
    }
}

export default SingleFolder;
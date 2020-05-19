import React, { Component } from 'react';

class Folder extends Component {

    handleChangeFolder(id) {
        this.props.changeFolder(id);
    }

    render() {
        return (
            <div className="folder-container">
                <a  className="folder-label" onClick={(id) => this.handleChangeFolder(this.props.id)}>{this.props.name}</a>
            </div>

        )
    }
}

export default Folder;
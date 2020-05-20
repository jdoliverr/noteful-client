import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Folder extends Component {

    render() {
        const folderId = this.props.id;
        return (
            <div className="folder-container">
                <NavLink to={`/folder/${folderId}`}  className="folder-label" >{this.props.name}</NavLink>
            </div>

        )
    }
}

export default Folder;

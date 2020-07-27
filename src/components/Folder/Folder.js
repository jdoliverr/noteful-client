import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Folder extends Component {

    render() {
        const { id, name } = this.props;
        return (
            <div className="folder-container">
                <NavLink to={`/folder/${id}`}  className="folder-label" >{name}</NavLink>
            </div>

        )
    }
}

export default Folder;

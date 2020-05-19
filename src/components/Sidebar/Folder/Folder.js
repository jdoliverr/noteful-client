import React, { Component } from 'react';

class Folder extends Component {
    render() {
        return (
            <div className="folder-container">
                <a href="/" class="folder-label" >{this.props.name}</a>
            </div>

        )
    }
}

export default Folder;
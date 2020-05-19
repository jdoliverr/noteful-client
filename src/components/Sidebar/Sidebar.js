import React, { Component } from 'react';
import Folder from './Folder/Folder';

class Sidebar extends Component {
    render() {
        const folders = this.props.folders.map(folder => {
            return <Folder name={folder.name} id={folder.id} key={folder.id} changeFolder={this.props.changeFolder}/>
        })


        return (
            <section className="main-folder-container">
                {folders}
                <div className="button-container">
                    <button className="folder-add">Add Folder</button>
                </div>
            </section>
        )
    }
}

export default Sidebar;
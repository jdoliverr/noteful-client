import React, { Component } from 'react';
import NotefulContext from '../../NotefulContext'
import Folder from '../Folder/Folder';

class Sidebar extends Component {
   static contextType = NotefulContext;

    render() {
        const folders = this.context.folders.map(folder => {
            return <Folder name={folder.name} id={folder.id} key={folder.id} />
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
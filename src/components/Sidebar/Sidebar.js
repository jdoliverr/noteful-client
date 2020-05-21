import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../../NotefulContext'
import Folder from '../Folder/Folder';
import AddFolderForm from '../AddFolderForm/AddFolderForm';

class Sidebar extends Component {
   static contextType = NotefulContext;



    render() {



        if(this.context.addingFolder) {
            return (
                <section className="main-folder-container">
                    <AddFolderForm {...this.props}/>
                </section>
            )
        }

        const folders = this.context.folders.map(folder => {
            return <Folder name={folder.name} id={folder.id} key={folder.id} />
        })


        return (
            <NotefulContext.Consumer>
                {(context) => (
                    <section className="main-folder-container">
                        {folders}
                        <div className="button-container">
                            <NavLink to='/add-folder' className="folder-add" onClick={context.toggleAddingFolder}>Add Folder</NavLink>
                        </div>
                    </section>
                )}
            </NotefulContext.Consumer>
        )
    }
}

export default Sidebar;
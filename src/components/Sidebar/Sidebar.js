import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../../NotefulContext'
import NotefulError from '../NotefulError/NotefulError';
import Folder from '../Folder/Folder';
import AddFolderForm from '../AddFolderForm/AddFolderForm';
import PropTypes from 'prop-types';

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
            return (
                <NotefulError key={'NE'+ folder.id}>
                    <Folder name={folder.name} id={folder.id} key={folder.id} />
                </NotefulError>
            )
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

Sidebar.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object
}

export default Sidebar;
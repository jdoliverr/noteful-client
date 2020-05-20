import React, { Component } from 'react';
import SingleFolder from '../Sidebar/SingleFolder/SingleFolder'
import SingleNote from '../NoteList/SingleNote/SingleNote'

class NotePage extends Component {
    render() {
        const currentFolder = this.props.folders.find(folder => folder.id === this.props.currentNote.folderId)

        console.log(currentFolder)
        return (
            <div className="wrapper">
                <section className="main-folder-container">
                    <SingleFolder currentFolder={currentFolder} onHomeClick={this.props.onHomeClick}/>
                </section>
                <section className="main-note-container">
                    <SingleNote currentNote={this.props.currentNote} />
                </section>
            </div>
        )
    }
}

export default NotePage;
import React, { Component } from 'react';
import SingleFolder from '../Sidebar/SingleFolder/SingleFolder'
import SingleNote from '../NoteList/SingleNote/SingleNote'

class NotePage extends Component {

    render() {
        return (
            <div className="wrapper">
                <section className="main-folder-container">
                    <SingleFolder />
                </section>
                <section className="main-note-container">
                    <SingleNote />
                </section>
            </div>
        )
    }
}

export default NotePage;
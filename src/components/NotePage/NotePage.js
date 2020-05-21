import React, { Component } from 'react';
import SingleFolder from '../SingleFolder/SingleFolder';
import SingleNote from '../SingleNote/SingleNote';

class NotePage extends Component {


    render() {

        return (
            <div className="wrapper">
                <section className="main-folder-container">
                    <SingleFolder noteId={this.props.noteId} onHomeClick={this.props.onHomeClick}/>
                </section>
                <section className="main-note-container">
                    <SingleNote noteId={this.props.noteId} onHomeClick={this.props.onHomeClick}/>
                </section>
            </div>
        )
    }
}

export default NotePage;
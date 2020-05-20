import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NoteList from '../NoteList/NoteList'


class MainPage extends Component {

    render() {
        return (
            <div className="wrapper">
                <Sidebar folders={this.props.folders} changeFolder={this.props.changeFolder}/>
                <NoteList notes={this.props.notes} folderId={this.props.folderId}/>
            </div>
        )
    }
}

export default MainPage
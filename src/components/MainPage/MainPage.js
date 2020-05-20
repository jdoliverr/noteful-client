import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NoteList from '../NoteList/NoteList'


class MainPage extends Component {

    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <NoteList folderId={this.props.folderId}/>
            </div>
        )
    }
}

export default MainPage
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import NoteList from '../NoteList/NoteList'


class MainPage extends Component {

    render() {

        return (
            <div className="wrapper">
                <Sidebar {...this.props} />
                <NoteList folderId={this.props.folderId} {...this.props} />
            </div>
        )
    }
}

export default MainPage
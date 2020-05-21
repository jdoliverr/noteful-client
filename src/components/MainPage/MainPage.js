import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NoteList from '../NoteList/NoteList';
import PropTypes from 'prop-types';

class MainPage extends Component {

    render() {
        return (
            <div className="wrapper">
                <Sidebar {...this.props} />
                <NoteList {...this.props} />
            </div>
        )
    }
}

MainPage.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
    folderId: PropTypes.string
}

export default MainPage
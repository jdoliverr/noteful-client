import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    addingNote: null,
    addingFolder: null,
    toggleAddingFolder: () => {},
    toggleAddingNote: () => {},
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {}
})

export default NotefulContext;
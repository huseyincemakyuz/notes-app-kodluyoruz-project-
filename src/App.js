import React from 'react';
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <NoteContainer />
        </div>
    )
}

export default App


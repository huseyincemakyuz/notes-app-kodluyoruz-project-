import React from 'react';
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer';
import AddNote from './components/AddNote/AddNote';
import { useState } from 'react';

function App() {

    const [notes, setNotes]=useState([
        {
            text:"sdklhajkda",
            time:"3:12",
            color:"rgba(65, 95, 112, 0.45)"
        },
    ])

    const addNote=(item) => {
        const newNotes=[...notes]

        newNotes.push({
            id: Date.now + "" + Math.floor(Math.random()*78) ,
            text:"",
            time:Date.now(),
            color:"rgba(65, 95, 112, 0.45)"
        })

        setNotes(newNotes)

    }

    return (
        <div className="App">
            <AddNote />
            <NoteContainer notes={notes} addNote={addNote} />
        </div>
    )
}

export default App


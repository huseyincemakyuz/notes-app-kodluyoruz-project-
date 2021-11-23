import React from 'react';
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer';
import { useState } from 'react';

function App() {

    const [notes, setNotes]=useState([
        {
            id:Date.now + "" + Math.floor(Math.random()*78),
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

    const deleteNote=(id) => {
        const newNotes=[...notes]

        const index=newNotes.findIndex(item => item.id === id)
        if (index<0) {
            return
        }

        newNotes.splice(index, 1)
        setNotes(newNotes)
    }

    return (
        <div className="App">
            <NoteContainer notes={notes} addNote={addNote} deleteNote={deleteNote} />
        </div>
    )
}

export default App


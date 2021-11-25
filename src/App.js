import React from 'react';
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer';
import { useState, useEffect } from 'react';

function App() {
    // Date and Time Functions
    const dateNew = new Date().toLocaleDateString();
    const timeNew = new Date().toLocaleTimeString(); 
    const [date, setDate] = useState(dateNew);
    const [time, setTime] = useState(timeNew);
    const d = new Date()
    const day = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]
    const month = ["January","February", "March", " April", " May", "June", "July ", "August", "September", "October"," November","December"]
   
    // Notes
    const [notes, setNotes]=useState(JSON.parse(localStorage.getItem('allNotes')) || [ 
        {
            id:Date.now + "" + Math.floor(Math.random()*78),
            text:`Bu uygulamayla;
            * Not ekleyebilir
            * Notunu düzenleyebilir
            * Kayıt edebilir
            * Ve silebilirsiniz`,
            time:`${ day[d.getDay() ] } ${[d.getDate()]} ${month[ d.getMonth() + 1] }  ${time}`,
            color:"rgba(65, 95, 112, 0.45)"
        },
    ])

    // Add Note Function

    const addNote=(item) => {
        const newNotes=[...notes]

        newNotes.push({
            id: Date.now + "" + Math.floor(Math.random()*78) ,
            text:"",
            time: `${ day[d.getDay() ] } ${[d.getDate()]} ${month[ d.getMonth() + 1] }  ${time}`,
            color:"rgba(65, 95, 112, 0.45)"
        })

        setNotes(newNotes)
        
        setDate(new Date().toLocaleDateString());
        setTime(new Date().toLocaleTimeString());
    }

    // Delete Note Function
    const deleteNote=(id) => {
        const newNotes=[...notes]

        const index=newNotes.findIndex(item => item.id === id)
        if (index<0) {
            return
        }

        newNotes.splice(index, 1)
        setNotes(newNotes)

        setDate(new Date().toLocaleDateString());
        setTime(new Date().toLocaleTimeString());
    }

    // Update Function

    const updateNote=(text, id) => {
        const newNotes=[...notes]

        const index=newNotes.findIndex(item => item.id === id)
        if (index<0) {
            return
        }

        newNotes[index].text = text
        setNotes(newNotes)
    }

    useEffect(() => {
        localStorage.setItem('allNotes',JSON.stringify(notes))
    },[notes]) 
    return (
        <div className="App">
            <NoteContainer notes={notes} addNote={addNote} deleteNote={deleteNote} updateNote={updateNote}/>
        </div>
    )
}

export default App


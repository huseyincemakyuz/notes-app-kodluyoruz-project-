import React from 'react';
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer';
import { useState, useEffect } from 'react';

function App() {
    const dateNew = new Date().toLocaleDateString();
    const timeNew = new Date().toLocaleTimeString(); 
    const [date, setDate] = useState(dateNew);
    const [time, setTime] = useState(timeNew);
    const d = new Date()
    const day = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", ]
    const month = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim","Kasım","Aralık"]
   


    const [notes, setNotes]=useState(JSON.parse(localStorage.getItem('allNotes')) || [
        {
            id:Date.now + "" + Math.floor(Math.random()*78),
            text:"sdklhajkda",
            time:`${[d.getDate()]} ${month[ d.getMonth() + 1] } ${ day[d.getDay() ] } ${time}`,
            color:"rgba(65, 95, 112, 0.45)"
        },
    ])

    const addNote=(item) => {
        const newNotes=[...notes]

        newNotes.push({
            id: Date.now + "" + Math.floor(Math.random()*78) ,
            text:"",
            time: `${[d.getDate()]} ${month[ d.getMonth() + 1] } ${ day[d.getDay() ] } ${time}`,
            color:"rgba(65, 95, 112, 0.45)"
        })

        setNotes(newNotes)
        
        setDate(new Date().toLocaleDateString());
        setTime(new Date().toLocaleTimeString());
    }

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

    useEffect(() => {
        localStorage.setItem('allNotes',JSON.stringify(notes))
    },[notes]) 
    return (
        <div className="App">
            <NoteContainer notes={notes} addNote={addNote} deleteNote={deleteNote} />
        </div>
    )
}

export default App


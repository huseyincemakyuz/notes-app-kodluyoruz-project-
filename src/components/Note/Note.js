import React from 'react'
import { useState } from 'react';
import "./Note.css";


function Note(props) {
    

    return (
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note-text" defaultValue={props.note.text}></textarea>
            <div className="note-footer">
                <p>{props.note.time} 
                <i className="fas fa-trash fa destroy" onClick={() => props.deleteNote(props.note.id)}></i>
                </p>
            </div>
        </div>
    )
}

export default Note

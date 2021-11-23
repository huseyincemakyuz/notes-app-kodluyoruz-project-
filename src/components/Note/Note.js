import React from 'react'
import "./Note.css";


function Note(props) {
    return (
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note-text" defaultValue={props.note.text}></textarea>
            <p>{props.note.time}  <span className="icon-delete"><i className="fas fa-trash fa destroy"></i></span></p>
        </div>
    )
}

export default Note

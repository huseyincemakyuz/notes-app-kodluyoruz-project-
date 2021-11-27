import React from 'react'
import Note from './Note';



function NoteContainer(props) {
    
    function reverseArray(arr) {
        let newArray = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          newArray.push(arr[i]);
        }
        return newArray;
      }

      const notes = reverseArray(props.notes)
    
    return (
        <div className="note-container"> 
            <h1>Notes App
                <span className="icon-plus">
                    <i className="fa fas fa-folder-plus fa-3x icon-add" 
                    onClick={(item) => {props.addNote(item)}}
                    ></i>
                     <i className="fas fa-check fa" id="edit-icon"></i>
                </span>
            </h1>
            <div className="note-container-notes custom-scroll">
                {
                    notes.map((item) => <Note 
                    key={item.id}
                    note={item}
                    deleteNote={props.deleteNote}
                    updateNote={props.updateNote}
                   />)}
            </div>
        </div>
    )
}

export default NoteContainer

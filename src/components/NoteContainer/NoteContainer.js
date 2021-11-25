import React from 'react'
import Note from '../Note/Note'


function NoteContainer(props) {

    const reverArray=(arr) => {
        const array=[]

        for(let i=arr.lengt - 1 ; i>=0; --i){
           array.push(arr[i])
        }
        return array
    };

    const notes = reverArray(props.notes)

    return (
        <div className="note-container"> 
            <h1>Notes App
                <span className="icon-plus">
                    <i className="fa fas fa-folder-plus fa-3x icon-add" 
                    onClick={(item) => {props.addNote(item)}}
                    ></i>
                </span>
            </h1>
            <div className="note-container-notes custom-scroll">
                {
                    props.notes.map((item) => <Note 
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

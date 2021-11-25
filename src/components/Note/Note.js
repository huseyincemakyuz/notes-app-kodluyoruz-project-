import React from 'react'


function Note(props) {
    
    const updateNote = (text, id) => {(props.updateNote(text, id));};

    return (
        <div className="note" style={{backgroundColor: props.note.color}}>
            <textarea 
                className="note-text custom-scroll" 
                defaultValue={props.note.text} 
                onChange={(event) => updateNote(event.target.value, props.note.id)}
            ></textarea>
            <div className="note-footer">
                <p className="date-part">{props.note.time} 
                <i className="fas fa-trash fa destroy" onClick={() => props.deleteNote(props.note.id)}></i>
                </p>
            </div>
        </div>
    )
}

export default Note

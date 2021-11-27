import React from 'react'



  
function Note(props) {
   
    // Icon Change Funtions
    const notesEdit = (icon,id) => {
        const myIcon = document.getElementById(icon)
    
        if(myIcon) {
            myIcon.classList.remove('fas','fa-check')
            myIcon.classList.add('far','fa-edit')
        }
    }

    const notesCheck = (icon) => {
         const myIcon = document.getElementById(icon)
    
        if(myIcon) {
            myIcon.classList.remove('far' ,'fa-edit')
            myIcon.classList.add('fas' ,'fa-check')
        } 
    }

    const updateNote = (text, id) => {(props.updateNote(text, id));};

    return (
        <div className="note" style={{backgroundColor: props.note.color}}>
            <textarea 
                className="note-text custom-scroll"  
                defaultValue={props.note.text} 
                onChange={(event) => updateNote(event.target.value, props.note.id)}
                onFocus={() => notesEdit('edit-icon')}
                onBlur={() =>  notesCheck('edit-icon')}
                placeholder="You can write your note here!"
                spellcheck="false"
            ></textarea>
            <div className="note-footer" >
                <p className="date-part">{props.note.time} 
                <i className="fas fa-trash fa destroy " onClick={() => props.deleteNote(props.note.id)} ></i>
                </p>
            </div>
        </div>
    )
}

export default Note

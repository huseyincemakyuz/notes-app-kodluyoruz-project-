import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

function NoteContainer(props) {
    return (
        <div className="note-container"> 
            <h1>Not Defteri <span className="icon-plus"><i className="fa fas fa-folder-plus fa-3x icon-add" ></i></span></h1>
            <div className="note-container-notes custom-scroll">
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"rgba(65, 95, 112, 0.45)"
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"rgba(65, 95, 112, 0.45)"
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"rgba(65, 95, 112, 0.45)"
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"rgba(65, 95, 112, 0.45)"
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"rgba(65, 95, 112, 0.45)"
                    }}  
                />
            </div>
        </div>
    )
}

export default NoteContainer

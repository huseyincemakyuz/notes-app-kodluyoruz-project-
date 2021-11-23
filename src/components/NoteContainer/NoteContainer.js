import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

function NoteContainer(props) {
    return (
        <div className="note-container"> 
            <h2>Notes</h2>
            <div clasName="note-container_notes">
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"cyan",
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"cyan",
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"cyan",
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"cyan",
                    }}  
                />
                <Note 
                    note={{
                        text:"adsadsa",
                        time:"4:32 PM",
                        color:"cyan",
                    }}  
                />
            </div>
        </div>
    )
}

export default NoteContainer

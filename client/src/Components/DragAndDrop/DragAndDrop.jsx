import React from 'react'
import './DragAndDrop.css'
import mountains from '../../Assets/image.svg'
import dashed from '../../Assets/dashed.svg'

function DragAndDrop() {
  return (
    <div className='DragAndDrop'>
        <div 
          className='DragAndDrop__dashed'
          style={{backgroundImage: `url(${dashed})`}}
        >
            <div>
                <img src={mountains} alt="" />
            </div>
            <span>Drag & Drop your image here</span>
        </div>
        <span className='DragAndDrop__or'>Or</span>
        <button className='DragAndDrop__ChooseFile'>Choose a file</button>
    </div>
  )
}

export default DragAndDrop
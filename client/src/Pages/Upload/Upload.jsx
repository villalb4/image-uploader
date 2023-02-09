import React from 'react'
import DragAndDrop from '../../Components/DragAndDrop/DragAndDrop'
import './Upload.css'

function Upload() {
  return (
    <div className='Upload'>
        <h1>Upload your image</h1>
        <p className='Upload__paragraph'>File should be Jpeg, Png,...</p>
        <DragAndDrop />
    </div>
  )
}

export default Upload
import React from 'react'
import './Successfully.css'
import successfully_icon from '../../Assets/finished_icon.png'
import Preview from '../../Components/Preview/Preview'
import LinkCopy from '../../Components/LinkCopy/LinkCopy'

function Successfully() {
  return (
    <div>
      <div className='icon__div'>
        <img src={successfully_icon} alt="" />
      </div>
      <span>Uploaded Successfully!</span>
      <div className="preview__div">
        <Preview />
      </div>
      <LinkCopy />
    </div>
  )
}

export default Successfully
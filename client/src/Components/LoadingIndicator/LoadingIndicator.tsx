import React from 'react'
import './LoadingIndicator.css'

function LoadingIndicator() {
	return (
    <div className='LoadingIndicator'>
    	<span>Uploading...</span>
      	<div className='LoadingIndicator__divIndicator'>
        	<div></div>
      	</div>
    </div>
  )
}

export default LoadingIndicator
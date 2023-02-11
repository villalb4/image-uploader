import React, { useRef, useState } from 'react'
import './DropArea.css'
import mountains from '../../Assets/image.svg'
import dashed from '../../Assets/dashed.svg'
import base64Util from '../../Utils/base64Util'

function DropArea() {
	const inputRef = useRef(null)
	const [drag, setDrag] = useState(false)

	const handleUpload = ( element ) => {
		const imageLoad = element.target.files[0]
		base64Util(imageLoad)
	}

	const handleFile = () => {
		inputRef.current.click()
	}

  	return (
		<div className='DropArea'>
			<div 
			className={drag ? 'DropArea__dashed active' : 'DropArea__dashed'}
			style={{backgroundImage: `url(${dashed})`}}
			>
				<div>
					<img src={mountains} alt="" />
				</div>
				<span>Drag & Drop your image here</span>
				<input 
				type="file" 
				ref={inputRef} 
				onChange={handleUpload}
				onDragEnter={() => setDrag(true)}
				onDragLeave={() => setDrag(false)}
				/>
			</div>
			<span className='DropArea__or'>Or</span>
			<button className='DropArea__ChooseFile' onClick={handleFile}>
				Choose a file
			</button>
		</div>
  	)
}

export default DropArea
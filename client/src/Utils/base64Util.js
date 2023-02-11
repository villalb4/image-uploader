const base64Util = (image) => {
    const reader = new FileReader()
	reader.onload = (e) => {
		const resultado = e
	}
	reader.readAsDataURL(image)
}

export default base64Util
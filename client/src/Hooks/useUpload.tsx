const UseUpload = async (image : string) => {
  if(image !== "") {
    const response = await fetch("http://localhost:3010/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: image }),
    });

    const responseBody = await response.json()
  }

}

export default UseUpload

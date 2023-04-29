import React, {useState} from 'react'

const UseUpload = (image : string) => {
  const handleUpload = async (): Promise<void> => {
    const response = await fetch("http://localhost:3010/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: image }),
    });
  };

  image !== "" && handleUpload()
}

export default UseUpload

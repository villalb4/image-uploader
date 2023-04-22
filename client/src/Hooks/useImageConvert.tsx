import React, {useEffect, useState} from 'react';

type UseImageConvertType = {
  imageBase64: string;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UseImageConvert = (): UseImageConvertType => {
  const [imageBase64, setImageBase64] = useState<string>("")
  
  const handleImageChange = ( image : React.ChangeEvent<HTMLInputElement>) => {
    const file = image.target.files?.[0]
    
    if(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImageBase64(reader.result as string)
      }
    }
  }

  return { imageBase64, handleImageChange }
}

export default UseImageConvert


// import { useState } from "react";

// type ImageFile = {
//   name: string;
//   size: number;
//   type: string;
//   dataURL?: string;
//   file?: File;
//   preview?: string;
// };

// function useImageFile() {
//   const [imageFile, setImageFile] = useState<ImageFile>({
//     name: "",
//     size: 0,
//     type: ""
//   });

//   function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
//     if (!e.target.files || e.target.files.length === 0) {
//       setImageFile({
//         name: "",
//         size: 0,
//         type: ""
//       });
//       return;
//     }
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onloadend = () => {
//       setImageFile({
//         name: file.name,
//         size: file.size,
//         type: file.type,
//         dataURL: reader.result as string,
//         file: file,
//         preview: URL.createObjectURL(file)
//       });
//     }
//   }

//   return { imageFile, handleImageChange };
// }

// export default useImageFile;
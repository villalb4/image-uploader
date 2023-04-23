import React, {useState} from 'react';

type ImageFile = {
  name: string;
  size: number;
  type: string;
  dataURL?: string;
  file?: File;
  preview?: string;
};

type UseImageConvertType = {
  imageBase64: ImageFile;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UseImageConvert = (): UseImageConvertType => {
  const [imageBase64, setImageBase64] = useState<ImageFile>({
    name: '',
    size: 0,
    type: "",
  })
  
  const handleImageChange = ( image : React.ChangeEvent<HTMLInputElement>) => {
    const file = image.target.files?.[0]
    
    if(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImageBase64({
          name: file.name,
          size: file.size,
          type: file.type,
          dataURL: reader.result as string,
          file: file,
          preview: URL.createObjectURL(file)
        }
        )
      }
    }
  }

  return { imageBase64, handleImageChange }
}

export default UseImageConvert

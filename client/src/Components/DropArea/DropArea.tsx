import React, { useRef, useState } from "react";
import "./DropArea.css";
import mountains from "../../Assets/image.svg";
import dashed from "../../Assets/dashed.svg";
import UseImageConvert from "../../Hooks/useImageConvert";
import UseUpload from "../../Hooks/useUpload";

type InputRef = React.RefObject<HTMLInputElement>;

const DropArea = () => {
  const inputRef: InputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const { imageBase64, handleImageChange } = UseImageConvert();
	UseUpload(imageBase64.dataURL || "");

  const handleOpenFile = () => {
    inputRef?.current?.click();
  };


  return (
    <div className="DropArea">
      <div
        className={drag ? "DropArea__dashed active" : "DropArea__dashed"}
        style={{ backgroundImage: `url(${dashed})` }}
      >
        <div>
          <img src={mountains} alt="" />
        </div>
        <span>Drag & Drop your image here</span>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/gif"
          ref={inputRef}
          onChange={handleImageChange}
          onDragEnter={() => setDrag(true)}
          onDragLeave={() => setDrag(false)}
        />
      </div>
      <span className="DropArea__or">Or</span>
      <button className="DropArea__ChooseFile" onClick={handleOpenFile}>
        Choose a file
      </button>
    </div>
  );
};

export default DropArea;

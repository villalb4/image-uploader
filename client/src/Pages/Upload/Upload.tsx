import React from "react";
import DropArea from "../../Components/DropArea/DropArea";
import "./Upload.css";

function Upload() {
  return (
    <div>
      <h1>Upload your image</h1>
      <p className="Upload__paragraph">File should be Jpeg, Png,...</p>
      <DropArea />
    </div>
  );
}

export default Upload;

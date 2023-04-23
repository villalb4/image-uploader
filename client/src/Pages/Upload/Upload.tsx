import React from "react";
import DropArea from "../../Components/DropArea/DropArea";
import "./Upload.css";
import LoadingIndicator from "../../Components/LoadingIndicator/LoadingIndicator";

function Upload() {
  return (
    <div className={true ? "Upload": "Upload loading"}>
      {true ? (
        <>
          <h1>Upload your image</h1>
          <p className="Upload__paragraph">File should be Jpeg, Png,...</p>
          <DropArea />
        </>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
}

export default Upload;

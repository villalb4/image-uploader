import React from "react";
import "./LoadingIndicator.css";

function LoadingIndicator() {
  return (
    <div>
      <span>Uploading...</span>
      <div className="LoadingIndicator__divIndicator">
        <div></div>
      </div>
    </div>
  );
}

export default LoadingIndicator;

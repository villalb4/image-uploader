import React from "react";
import "./LinkCopy.css";

function LinkCopy() {
  return (
    <div className="LinkCopy">
        <span className="LinkCopy__link">
          https://images.yourdomain.com/photo-1496950866446-325...
        </span>
      <div className="LinkCopy__divButton">
        <button>Copy Link</button>
      </div>
    </div>
  );
}

export default LinkCopy;

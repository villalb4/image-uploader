import React from "react";
import "./LinkCopy.css";

function LinkCopy() {
  return (
    <div className="LinkCopy">
        <span className="LinkCopy__link">
          https://images.yourdomain.com/photo-1496950866446-325...
        </span>

        <button className="LinkCopy__button">Copy Link</button>
      
    </div>
  );
}

export default LinkCopy;

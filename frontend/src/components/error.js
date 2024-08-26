import React from "react";

export default function Error(props) {
  return (
    <div className="error-container">
      <p>{props.error}</p>
    </div>
  );
}

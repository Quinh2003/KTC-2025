import React, { useState } from "react";

const Exercise07: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleDoubleClick = () => {
    setShowMessage(true);
    setTimeout(() => { setShowMessage(false); }, 2000);
  };

  return (
    <div style={{ textAlign: "center",margin: '50px 0 0 100px'}}>
        <h2>Exercise 07: Double Click Message</h2>
        <button onDoubleClick={handleDoubleClick}
            style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            }}> Clicked!
      </button>

      {showMessage && (
        <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
          Double-clicked!
        </p>
      )}
    </div>
  );
};

export default Exercise07;

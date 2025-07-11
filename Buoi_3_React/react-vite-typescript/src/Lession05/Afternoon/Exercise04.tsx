import { useState } from "react";

function Exercise04() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{margin: '50px 0 0 100px'} }>
      <h2>Exercise 4: Hover Highlight</h2>
      <div
        style={{
          backgroundColor: isHovered ? "yellow" : "white",
          border: "1px solid #ccc",
          padding: "20px",
          width: "100px",
          textAlign: "center",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover Highlight!
      </div>
    </div>
  );
}

export default Exercise04;

import React, { useState } from "react";

const Exercise09: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div style={{margin: "50px 0 0 100px" }}>
        <h2>Exercise 09: Checkbox Toggle</h2>
      <label style={{ fontSize: "18px" }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ marginRight: "8px" }}
        />
        Toggle me
      </label>

      <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        Checkbox is: {isChecked ? "checked" : "unchecked"}
      </p>
    </div>
  );
};

export default Exercise09;

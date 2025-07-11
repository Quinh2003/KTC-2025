import React, { useState } from "react";

const Exercise08: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div style={{margin: "50px 0 0 100px" }}>
        <h2>Exercise 8: Dropdown Selection</h2>
        <label htmlFor="fruit-select" style={{ fontSize: "16px", marginRight: "8px" }}>
            Choose a type of fruit:
        </label>
        <select
            id="fruit-select"
            value={selectedFruit}
            onChange={handleChange}
            style={{ padding: "8px 12px", fontSize: "16px" }}
        >
            <option value="">-- Please select --</option>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
        </select>

      {selectedFruit && (
        <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
          Selected Fruit: {selectedFruit}
        </p>
      )}
    </div>
  );
};

export default Exercise08;

import React, { useState } from "react";

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

const Exercise10: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{margin: "50px 0 0 100px" }}>
        <h2>Exercise 10: SearchFilter</h2>
      <input
        type="text"
        placeholder="Search fruit..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={{ fontSize: "18px", padding: "4px 0" }}>
              {item}
            </li>
          ))
        ) : (
          <li style={{ fontSize: "16px", color: "#999" }}>No matches found.</li>
        )}
      </ul>
    </div>
  );
};

export default Exercise10;

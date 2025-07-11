import { useState } from "react";

function Exercise05() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Ngăn reload trang
    alert(`You submitted: ${inputValue}`);
    setInputValue(""); // Reset input
  };

  return (
    <div style={{margin: '50px 0 0 100px'} }>
      <h2>Exercise 05: Form Submission Alert</h2>
      <form onSubmit={handleSubmit} >
        <input
          style={{width: '200px', height: '30px'}}  
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" style={{marginLeft: '10px'}}>Submit</button>
      </form>
    </div>
  );
}

export default Exercise05;
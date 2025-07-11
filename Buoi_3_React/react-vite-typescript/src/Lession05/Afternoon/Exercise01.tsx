import { useState } from "react";


function Exercise01() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

 return (
  <div style={{ margin: ' 0 0 0 100px' }}>
    <h2>Exercise 01: Button Click Counter</h2>
    <button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>Clicked</button>
    <p>Clicked: {count} times</p>
  </div>
);
}

export default Exercise01;

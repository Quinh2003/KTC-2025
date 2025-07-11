import { useState } from "react";

function Exercise03() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div style={{margin: '50px 0 0 100px'} }>
        <h2>Exercise 3: Toggle Switch</h2>
        <button onClick={handleToggle} style={{ backgroundColor: isOn ? 'red' : 'green', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
            {isOn ? "Turn OFF" : "Turn ON"}
        </button>
        <p>State: {isOn ? "ON" : "OFF"}</p>
    </div>
  );
}

export default Exercise03;

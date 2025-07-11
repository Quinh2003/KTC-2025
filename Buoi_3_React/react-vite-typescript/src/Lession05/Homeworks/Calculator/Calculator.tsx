import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "=") {
      try {
        const expression = input.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(expression);
        setInput(result === Infinity || result === -Infinity ? "Error" : result.toString());
      } catch {
        setInput("Error");
      }
      return;
    }

    const lastNumber = input.split(/[\+\-\×\÷]/).pop();
    if (value === "." && lastNumber?.includes(".")) return;

    setInput(prev => prev + value);
  };

  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
  ];

  return (
    <div className={styles.calculator}>
      <input type="text" value={input} readOnly className={styles.display} placeholder="0" />
      <div className={styles.grid}>
        {buttons.map((btn) => (
          <button key={btn}
            className={
              btn === "C" ? styles.clearBtn :
              ["+", "-", "×", "÷"].includes(btn) ? styles.operatorBtn :
              styles.button} onClick={() => handleClick(btn)}> {btn}
          </button>
        ))}
        <button className={styles.equalsBtn} onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;

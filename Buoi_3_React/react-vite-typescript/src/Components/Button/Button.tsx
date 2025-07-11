import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  type?: "primary" | "apple" | "outline";
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, type = "primary", icon, rightIcon, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </button>
  );
};

export default Button;

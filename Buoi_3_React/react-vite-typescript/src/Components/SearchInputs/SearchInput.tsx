import React from "react";
import styles from "./SearchInput.module.css";

interface SearchProps {
  placeholder: string;
  bold?: boolean;
  leftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rightBgColor?: string;
  onClickRight?: () => void;
  type?: string;
}

const SearchInput: React.FC<SearchProps> = ({
  placeholder,
  bold = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rightBgColor,
  onClickRight,
  type = "text"
}) => {
  return (
    <div className={styles.inputContainer}>
      {LeftIcon && <LeftIcon className={styles.leftIcon} />}
      <input
        className={`${styles.input} ${bold ? styles.bold : ""}`}
        type={type}
        placeholder={placeholder}
      />
      {RightIcon && (
        <button
          className={styles.rightIconWrapper}
          style={{ backgroundColor: rightBgColor || "transparent" }}
          onClick={onClickRight}
        >
          <RightIcon className={styles.rightIcon} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;

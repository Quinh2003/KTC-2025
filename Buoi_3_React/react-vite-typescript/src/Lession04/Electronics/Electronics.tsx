import React from "react";
import styles from "./Electronics.module.css";

interface Electronic {
  img: string;
  name: string;
  oldPrice?: string;
  newPrice: string;
  discount?: string;
}

const Electronics: React.FC<Electronic> = ({ img, name, oldPrice, newPrice, discount }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={name} />
        {discount && <div className={styles.discount}>{discount}</div>}
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.priceWrapper}>
        <span className={styles.newPrice}>{newPrice}</span>
        {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
      </div>
    </div>
  );
};

export default Electronics;

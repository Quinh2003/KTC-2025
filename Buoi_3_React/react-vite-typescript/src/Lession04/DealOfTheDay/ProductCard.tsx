import React from 'react';
import styles from './Deal.module.css';
import { FaStar } from 'react-icons/fa6';

interface ProductProps {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  sold: number;
  rating: number;
}

const ProductCard: React.FC<ProductProps> = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  sold,
  rating,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <div className={styles.discount}>-{discount}%</div>
      </div>
      <div className={styles.shop} style={{ fontWeight: 'bold' }}>YOUNG SHOP
        <div style={{ borderBottom: '1px solid #eee', margin: '6px 0 0 0' }}></div>
      </div>
      <div className={styles.price}>
        <span className={styles.newPrice}>{price}</span>
        <span className={styles.oldPrice}>{oldPrice}</span>
        <span className={styles.off}>{discount}</span>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} color={i <= rating ? '#FFB307' : '#ccc'} size={14} />
        ))}
      </div>
      <div className={styles.progress}>
        <div className={styles.bar} style={{ width: `${Math.min(sold, 100)}%` }}></div>
      </div>
      <div className={styles.sold}>Sold: {sold}</div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import ProductCard from './ProductCard';
import styles from './Deal.module.css';

const products = [
  {  
    id: 1,
    image: './img/9.jpg',
    title: 'LG White Front Load Steam Washer',
    price: '$1422.7',
    oldPrice: '$1025.5',
    discount: '18% off',
    sold: 10,
    rating: 4,
    shop: 'YOUNG SHOP',
  },
  {
    id: 2,
    image: './img/10.jpg',
    title: 'Edifier Powered Bookshelf Speakers',
    price: '$96',
    oldPrice: '$85',
    discount: '18% off',
    sold: 15,
    rating: 4,
    shop: 'YOUNG SHOP',

  },
  {
    id: 3,
    image: './img/11.jpg',
    title: 'Amcrest Security Camera in White Color',
    price: '$62.99',
    oldPrice: '$45.90',
    discount: '18% off',
    sold: 20,
    rating: 4,
  },
  {
    id: 4,
    image: './img/12.jpg',
    title: 'Grand Slam Indoor Of Show Jumping Novel',
    price: '$41.99',
    oldPrice: '$32.99',
    discount: '18% off',
    sold: 22,
    rating: 4,
  },
  {
    id: 5,
    image: './img/13.jpg',
    title: 'Sound Intone i65 Earphone White Version',
    price: '$106.96',
    oldPrice: '$100.99',
    discount: '18% off',
    sold: 10,
    rating: 4,
  },
  {
    id: 6,
    image: './img/14.jpg',
    title: 'Korea Long Sofa Fabric In Blue Navy Color',
    price: '$670.20',
    oldPrice: '$567.80',
    discount: '18% off',
    sold: 79,
    rating: 4,
  },
];

const DealOfTheDay: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Deal of the day</h2>
        <div className={styles.timer}>
          End in: <span>6:17:17:39</span>
        </div>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDay;

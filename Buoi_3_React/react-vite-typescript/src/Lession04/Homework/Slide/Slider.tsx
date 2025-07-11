import React, { useState } from 'react';
import styles from './Slider.module.css';

const images = [
  { src: '/img/9.jpg', alt: 'Image 1' },
  { src: '/img/10.jpg', alt: 'Image 2' },
  { src: '/img/11.jpg', alt: 'Image 3' },
  { src: '/img/12.jpg', alt: 'Image 4' },
  { src: '/img/13.jpg', alt: 'Image 5' },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <h2><strong>Slide with Thumb</strong></h2>
      <div className={styles.mainImageWrapper}>
        <button className={`${styles.navButton} ${styles.left}`} onClick={prevSlide}>
          &#8249;
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className={styles.mainImage}
        />
        <button className={`${styles.navButton} ${styles.right}`} onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.thumbnailWrapper} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={image.src} alt={image.alt} className={styles.thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

'use client';

import React, { useState } from 'react';
import styles from './OurOffice.module.scss';

const officeImages = [
  { src: require('../../images/OFFICCE/officePhoto1.jpg'), alt: 'Office Image 1' },
  { src: require('../../images/OFFICCE/officePhoto2.jpg'), alt: 'Office Image 2' },
  { src: require('../../images/OFFICCE/officePhoto3.jpg'), alt: 'Office Image 3' },
  { src: require('../../images/OFFICCE/officePhoto4.jpg'), alt: 'Office Image 4' },
];

const OurOffice = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const toggleImageSize = (index) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  const leftImages = officeImages.slice(0, 2);
  const rightImages = officeImages.slice(2, 4);

  return (
    <section className={styles.ourOffice}>
      <div className={styles.imagesContainer}>
        <div className={styles.imagesSection}>
          {leftImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.imageContainer} ${selectedImageIndex === index ? styles.enlarged : ''}`}
              onClick={() => toggleImageSize(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.officeImage}
              />
              <div className={`${styles.imageOverlay} ${selectedImageIndex === index ? styles.noBorder : ''}`}>
                <span className={styles.plusIcon}>+</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.textSection}>
          <h2 className={styles.sectionTitle}>THE OFFICE</h2>
          <p className={styles.sectionBody}>See our office</p>
        </div>

        <div className={styles.imagesSection}>
          {rightImages.map((image, index) => (
            <div
              key={index + 2}
              className={`${styles.imageContainer} ${selectedImageIndex === index + 2 ? styles.enlarged : ''}`}
              onClick={() => toggleImageSize(index + 2)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.officeImage}
              />
              <div className={`${styles.imageOverlay} ${selectedImageIndex === index + 2 ? styles.noBorder : ''}`}>
                <span className={styles.plusIcon}>+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOffice;

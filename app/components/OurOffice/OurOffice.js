"use client";

import React, { useState } from 'react';
import styles from './OurOffice.module.scss';
import ImageModal from '../ImageModal/ImageModal';

const officeImages = [
  { src: '/images/office1.jpg', alt: 'Office Image 1' },
  { src: '/images/office2.jpg', alt: 'Office Image 2' },
  { src: '/images/office3.jpg', alt: 'Office Image 3' },
  { src: '/images/office4.jpg', alt: 'Office Image 4' },
];

const OurOffice = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className={styles.ourOffice}>
      <h2 className={styles.sectionTitle}>Our Office</h2>
      <div className={styles.officeImages}>
        {officeImages.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.officeImage}
              onClick={() => openImageModal(image)}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.plusIcon}>+</span>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeImageModal} />
      )}
    </section>
  );
};

export default OurOffice;

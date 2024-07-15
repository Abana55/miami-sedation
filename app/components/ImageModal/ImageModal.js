import React from 'react';
import styles from './ImageModal.module.scss';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <img src={image.src} alt={image.alt} className={styles.modalImage} />
      </div>
    </div>
  );
};

export default ImageModal;

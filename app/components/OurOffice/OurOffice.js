"use client";

import React, { useState } from "react";
import styles from "./OurOffice.module.scss";

const officeImages = [
  {
    src: "/images/OFFICCE/dentist-doctor-teeth-health-care-specialist-explai-2023-11-27-05-10-10-utc.JPG",
    alt: "Office Image 1",
  },
  {
    src: "/images/OFFICCE/dentist-doctor-teeth-health-care-specialist-explai-2023-11-27-05-10-10-utc.JPG",
    alt: "Office Image 2",
  },
  {
    src: "/images/OFFICCE/dentist-doctor-teeth-health-care-specialist-explai-2023-11-27-05-10-10-utc.JPG",
    alt: "Office Image 3",
  },
  {
    src: "/images/OFFICCE/dentist-doctor-teeth-health-care-specialist-explai-2023-11-27-05-10-10-utc.JPG",
    alt: "Office Image 4",
  },
];

const OurOffice = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const toggleImageSize = (index) => {
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  return (
    <section className={styles.ourOffice}>
      <h2 className={styles.sectionTitle}>Our Office</h2>
      <div className={styles.officeImages}>
        {officeImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.imageContainer} ${
              selectedImageIndex === index ? styles.enlarged : ""
            }`}
            onClick={() => toggleImageSize(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={styles.officeImage}
            />
            <div
              className={`${styles.imageOverlay} ${
                selectedImageIndex === index ? styles.noBorder : ""
              }`}
            >
              <span className={styles.plusIcon}>+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOffice;

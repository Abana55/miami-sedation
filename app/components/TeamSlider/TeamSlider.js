"use client";

import React, { useState } from "react";
import styles from "./TeamSlider.module.scss";

const TeamSlider = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button onClick={handlePrev} className={styles.slider__button}>
        &#10094;
      </button>
      <div className={styles.slider__container}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${styles.slider__card} ${
              index === currentIndex ? styles["slider__card--active"] : ""
            }`}
          >
            <img
              src={member.photo}
              alt={member.name}
              className={styles.slider__image}
            />
            <h3 className={styles.slider__name}>{member.name}</h3>
            <p className={styles.slider__title}>{member.title}</p>
            <p className={styles.slider__description}>{member.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className={styles.slider__button}>
        &#10095;
      </button>
    </div>
  );
};

export default TeamSlider;

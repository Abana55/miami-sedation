"use client";

import React, { useState } from "react";
import styles from "./TeamSlider.module.scss";

const TeamSlider = ({ teamMembers }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__container}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${styles.slider__card} ${
              hoverIndex === index ? styles["slider__card--active"] : ""
            } ${hoverIndex !== null && hoverIndex !== index ? styles["slider__card--inactive"] : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
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
    </div>
  );
};

export default TeamSlider;

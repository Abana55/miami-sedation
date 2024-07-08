"use client";

import React, { useState } from "react";
import styles from "./TeamAccordion.module.scss";

const TeamAccordion = ({ teamMembers }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First card open by default

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.accordion} id="accordionFlushExample">
      {teamMembers.map((member, index) => (
        <div
          className={`${styles.accordion__item} ${
            activeIndex === index ? styles.active : styles.inactive
          }`}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <div className={styles.accordion__header}>
            <img
              src={member.photo}
              alt={member.name}
              className={styles.accordion__image}
            />
          </div>
          <div className={`${styles.accordion__body} ${activeIndex === index ? styles.show : ""}`}>
            <h3 className={styles.accordion__name}>{member.name}</h3>
            <p className={styles.accordion__title}>{member.title}</p>
            <p className={styles.accordion__description}>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamAccordion;

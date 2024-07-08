"use client";

import React, { useState, useEffect } from "react";
import styles from "./TeamAccordion.module.scss";

const TeamAccordion = ({ teamMembers }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First card open by default

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion} id="accordionFlushExample">
      {teamMembers.map((member, index) => (
        <div className={styles.accordion__item} key={index}>
          <h2 className={styles.accordion__header} id={`flush-heading${index}`}>
            <button
              className={`${styles.accordion__button} ${
                activeIndex === index ? "" : styles.collapsed
              }`}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`flush-collapse${index}`}
            >
              {member.name}
            </button>
          </h2>
          <div
            id={`flush-collapse${index}`}
            className={`${styles.accordion__collapse} ${
              activeIndex === index ? styles.show : ""
            }`}
            aria-labelledby={`flush-heading${index}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className={styles.accordion__body}>
              <img
                src={member.photo}
                alt={member.name}
                className={styles.accordion__image}
              />
              <p className={styles.accordion__title}>{member.title}</p>
              <p className={styles.accordion__description}>{member.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamAccordion;

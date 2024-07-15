"use client";

import React, { useState } from 'react';
import styles from './TeamAccordion.module.scss';

const TeamAccordion = ({ teamMembers }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the first card as active by default

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.accordion}>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <div className={styles.cardImage} style={{ backgroundImage: `url(${member.photo})` }}></div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{member.name}</h3>
            <p className={styles.cardSubtitle}>{member.title}</p>
            <p className={styles.cardDescription}>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamAccordion;

"use client";

import React, { useState } from "react";
import styles from "./TeamAccordion.module.scss";
import Image from "next/image";

const TeamAccordion = ({ teamMembers }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.accordion}>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            index === activeIndex ? styles.active : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <div className={styles.cardImage}>
            <Image
              src={member.photo}
              alt={`${member.name}'s photo`}
              layout="fill"
              objectFit="cover"
              quality={70} 
            />
          </div>
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

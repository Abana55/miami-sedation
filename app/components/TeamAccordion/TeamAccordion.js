"use client";

import React, { useState, useEffect } from "react";
import styles from "./TeamAccordion.module.scss";

const TeamAccordion = ({ teamMembers }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMobile, teamMembers.length]);

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveIndex(null);
    }
  };

  return (
    <div className={styles.accordion}>
      {teamMembers.map((member, index) => (
        <div
          className={`${styles.accordion__item} ${
            activeIndex === index ? styles.active : styles.inactive
          }`}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url(${member.photo})` }}
        >
          <div className={styles.accordion__content}>
            <h3 className={styles.accordion__name}>{member.name}</h3>
            <p className={styles.accordion__title}>{member.title}</p>
            <p className={styles.accordion__description}>
              {member.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamAccordion;

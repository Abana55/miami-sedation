"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ScrollFadeIn.module.scss";

const ScrollFadeIn = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.scrollFadeIn} ref={elementRef}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;

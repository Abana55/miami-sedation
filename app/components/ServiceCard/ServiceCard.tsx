"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./ServiceCard.module.scss";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  useEffect(() => {
    const card = document.querySelector(`.${styles.serviceCard}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["serviceCard--visible"]);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (card) {
      observer.observe(card);
    }
  }, []);

  return (
    <Link href={service.link} className={styles.serviceCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <img
            src={service.image}
            alt={service.title}
            className={styles["image-element"]}
          />
          <h3 className={styles.cardTitle}>{service.title}</h3>
        </div>
        <p className={styles.cardDescription}>{service.description}</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </Link>
  );
};

export default ServiceCard;
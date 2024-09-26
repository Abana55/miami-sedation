"use client";

import React from "react";
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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={service.link} className={styles.serviceCard}>
      <div className={styles.cardContent}>
        {/* Lazy-load the image */}
        <div className={styles.cardImage}>
          <img
            loading="lazy" // Ensuring images are lazy-loaded
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

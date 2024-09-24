"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";
import styles from "../../DentalServices.module.scss";

const images = [
  "/images/IMG_3696.JPG",
  "/images/IMG_3948.jpeg",
  "/images/IMG_6450.jpeg",
];

const Fillings = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <>
      <Head>
        <title>Fillings | Your Dental Practice</title>
        <meta
          name="description"
          content="Learn about dental fillings provided by Your Dental Practice. Fillings are used to repair cavities and restore tooth function and integrity."
        />
        <meta
          name="keywords"
          content="dental fillings, cavities, tooth repair, oral health"
        />
      </Head>

      <main className={styles.fillingsPage}>
        {/* Header Section */}
        <header className={styles.fillingsPage__header}>
          <h1 className={styles.fillingsPage__title}>Dental Fillings</h1>
          <p className={styles.fillingsPage__intro}>
            Dental fillings are an effective solution for repairing cavities and
            restoring your tooth’s strength and function. Our advanced materials
            and techniques ensure a seamless look that matches the natural color
            of your teeth.
          </p>
        </header>

        {/* Grid Layout */}
        <section className={styles.fillingsPage__grid}>
          {/* Article Section */}
          <article className={styles.fillingsPage__content}>
            <h2 className={styles.fillingsPage__subheader}>
              What Are Dental Fillings?
            </h2>
            <p className={styles.fillingsPage__text}>
              Fillings are used to restore a tooth damaged by decay, returning
              it to its normal function and shape. When a dentist gives you a
              filling, they first remove the decayed tooth material, clean the
              affected area, and then fill the cleaned-out cavity with a filling
              material.
            </p>

            <h2 className={styles.fillingsPage__subheader}>
              Procedure Overview
            </h2>
            <section className={styles.fillingsPage__text}>
              <h3>1. Consultation and Diagnosis</h3>
              <p>
                The process begins with a thorough dental exam where we identify
                any cavities or areas of concern. X-rays are typically taken to
                assess the severity of decay. After diagnosis, you and your
                dentist will discuss the best options for treatment.
              </p>

              <h3>2. Filling Placement</h3>
              <p>
                The decayed portion of the tooth is carefully removed, and the
                tooth is prepared for the filling material. The material is
                applied in layers and hardened with a special curing light to
                ensure durability and protection.
              </p>

              <h3>3. Final Adjustments</h3>
              <p>
                After the filling has hardened, your dentist will polish it to
                ensure a smooth finish. Adjustments are made to make sure the
                filling fits perfectly with your bite, ensuring comfort and
                function.
              </p>
            </section>
          </article>

          {/* Image Slider Section */}
          <aside className={styles.fillingsPage__imageSlider}>
            <div className={styles.slider__mainImage}>
              <img
                src={images[currentImage]}
                alt={`Filling ${currentImage + 1}`}
              />
            </div>
            <div className={styles.slider__thumbnails}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.slider__thumbnail} ${
                    currentImage === index ? styles.active : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            <button
              className={styles.slider__nextButton}
              onClick={handleNextImage}
            >
              Next
            </button>
          </aside>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.fillingsPage__whyUs}>
          <h2 className={styles.fillingsPage__subheader}>
            Why Choose Our Fillings?
          </h2>
          <p className={styles.fillingsPage__text}>
            At Your Dental Practice, we are committed to providing our patients
            with the best possible care. Our fillings are designed to last,
            using advanced techniques and high-quality materials that ensure
            durability and a natural look. We prioritize your comfort and the
            health of your teeth.
          </p>
          <Link
            href="/contact-us"
            className={styles.fillingsPage__contactButton}
          >
            Contact Us
          </Link>
        </section>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </main>
    </>
  );
};

export default Fillings;

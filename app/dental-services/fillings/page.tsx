"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";

const images = [
  "../../../public/images/IMG_3696.JPG",
  "../../../public/images/IMG_3948.jpeg",
  "../../../public/images/IMG_6450.jpeg",
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
      <main className={`${styles["service-page"]} ${styles["service-page--restoration"]}`}>
        <h1 className={styles["service-page__header"]}>Fillings</h1>
        <section className={styles["service-page__content"]}>
          <article className={styles["service-page__articles"]}>
            <p className={styles["service-page__text"]}>
              Dental fillings are used to treat cavities and restore the function and integrity of your teeth.
            </p>
            <h2 className={styles["service-page__subheader"]}>Procedure Overview</h2>
            <section className={styles["service-page__text"]}>
              <h3>Initial Consultation</h3>
              <p>The initial consultation involves a thorough examination, discussion of findings, and creation of a personalized treatment plan. The dentist will take X-rays, explain the available filling options, and answer any questions you may have.</p>
              
              <h3>Filling Placement</h3>
              <p>The filling placement process includes administering local anesthesia, removing decay, preparing the tooth, applying the filling material, and shaping and polishing the filling. The dentist will ensure the cavity is clean before filling it in layers and curing each layer for composite fillings.</p>
              
              <h3>Post-Procedure Care</h3>
              <p>Post-procedure care includes specific instructions on caring for your new filling, follow-up appointments to check the filling, and maintaining good oral hygiene practices to ensure the longevity of your filling. Regular dental check-ups and proper oral hygiene are essential.</p>
            </section>
            <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
            <p className={styles["service-page__text"]}>
              Our dental practice offers high-quality fillings and personalized care to ensure the best outcomes for our patients.
            </p>
            <Link href="/contact-us" className={styles["service-page__contact-button"]}>
              Contact Us
            </Link>
          </article>
          <aside className={styles["service-page__image-slider"]}>
            <div className={styles["slider__main-image"]}>
              <img src={images[currentImage]} alt={`Filling ${currentImage + 1}`} />
            </div>
            <div className={styles["slider__thumbnails"]}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${styles["thumbnail"]} ${currentImage === index ? styles["active"] : ""}`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className={styles["slider__next-button"]} onClick={handleNextImage}>
              Next
            </button>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Fillings;
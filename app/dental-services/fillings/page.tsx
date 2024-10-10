"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ScrollFadeIn from "@/app/components/ScrollFadeIn/ScrollFadeIn";
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
        <title>
          Dental Fillings in [Your City] | Restore Your Smile at Your Dental
          Practice
        </title>
        <meta
          name="description"
          content="Looking for dental fillings in [Your City]? At Your Dental Practice, we offer advanced cavity repair and tooth restoration services. Restore your smile with our natural-looking fillings. Schedule an appointment today!"
        />
        <meta
          name="keywords"
          content="dental fillings, cavity repair, tooth restoration, composite fillings, amalgam fillings, dental care, oral health, [Your City]"
        />
        <meta
          property="og:title"
          content="Dental Fillings in [Your City] | Restore Your Smile"
        />
        <meta
          property="og:description"
          content="Repair cavities and restore your tooth's function with advanced dental fillings at Your Dental Practice in [Your City]. Contact us to schedule your appointment."
        />
        <meta
          property="og:image"
          content="[URL to an image representing your service]"
        />
        <meta property="og:url" content="[URL of the fillings page]" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dental Fillings in [Your City] | Restore Your Smile"
        />
        <meta
          name="twitter:description"
          content="Repair cavities and restore your tooth's function with advanced dental fillings at Your Dental Practice in [Your City]. Contact us to schedule your appointment."
        />
        <meta
          name="twitter:image"
          content="[URL to an image representing your service]"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="[URL of the fillings page]" />
      </Head>

      <main className={styles.fillingsPage}>
        {/* Header Section */}
        <header className={styles.fillingsPage__header}>
          <ScrollFadeIn>
            <h1 className={styles.fillingsPage__title}>Dental Fillings</h1>
            <p className={styles.fillingsPage__intro}>
              Dental fillings are a critical part of modern dentistry, helping
              to restore the structure of your teeth after cavities. Our
              practice uses advanced materials for a natural, long-lasting look
              and function.
            </p>
          </ScrollFadeIn>
        </header>

        {/* Grid Layout */}
        <section className={styles.fillingsPage__grid}>
          {/* Article Section */}
          <article className={styles.fillingsPage__content}>
            <ScrollFadeIn>
              <h2 className={styles.fillingsPage__subheader}>
                What Are Dental Fillings?
              </h2>
              <p className={styles.fillingsPage__text}>
                Fillings are used to restore a tooth that has been damaged by
                decay. Once the decayed portion is removed, the filling material
                is placed to bring the tooth back to its original shape and
                function. At our practice, we use composite resin materials that
                closely match the natural color of your teeth when placing
                fillings.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <h2 className={styles.fillingsPage__subheader}>The Procedure</h2>
              <div className={styles.fillingsPage__divider}>
                <span className={styles.fillingsPage__line}>|</span>
              </div>
              <section className={styles.fillingsPage__text}>
                <h3>Initial Consultation</h3>
                <p>
                  The process begins with a thorough dental examination where we
                  detect any cavities or damage to your teeth. X-rays are
                  typically taken to understand the extent of decay and plan the
                  treatment accordingly.
                </p>

                <div className={styles.fillingsPage__divider}>
                  <span className={styles.fillingsPage__line}>|</span>
                </div>

                <h3>Removing the Decay</h3>
                <p>
                  During the procedure, the decayed area of the tooth is
                  carefully removed, and the remaining tooth is cleaned and
                  prepared for the filling. Local anesthesia is typically used
                  to ensure your comfort throughout the process.
                </p>

                <div className={styles.fillingsPage__divider}>
                  <span className={styles.fillingsPage__line}>|</span>
                </div>

                <h3>Applying the Filling</h3>
                <p>
                  Composite resin is placed in
                  layers into the cleaned cavity. Each layer is hardened using a
                  special curing light, ensuring the strength and durability of
                  the filling.
                </p>

                <div className={styles.fillingsPage__divider}>
                  <span className={styles.fillingsPage__line}>|</span>
                </div>

                <h3>Final Adjustments</h3>
                <p>
                  The filling is shaped and polished to match the natural
                  contours of your tooth, restoring its appearance and function.
                  The dentist will make adjustments to ensure the filling fits
                  comfortably with your bite.
                </p>
              </section>
            </ScrollFadeIn>

            {/* <ScrollFadeIn>
              <h2 className={styles.fillingsPage__subheader}>
                Types of Fillings We Offer
              </h2>
              <ul className={styles.fillingsPage__list}>
                <li className={styles.fillingsPage__listItem}>
                  <strong>Composite Fillings:</strong> Tooth-colored fillings
                  that blend seamlessly with your natural teeth for a more
                  aesthetic result.
                </li>
                <li className={styles.fillingsPage__listItem}>
                  <strong>Amalgam Fillings:</strong> A durable option used
                  primarily for back teeth where strength is a priority.
                </li>
                <li className={styles.fillingsPage__listItem}>
                  <strong>Gold Fillings:</strong> Extremely durable and
                  long-lasting, though more expensive.
                </li>
              </ul>
            </ScrollFadeIn> */}

            <ScrollFadeIn>
              <h2 className={styles.fillingsPage__subheader}>
                Why Choose Our Dental Fillings?
              </h2>
              <p className={styles.fillingsPage__text}>
                At our practice, we prioritize quality and patient comfort. We
                use the latest techniques to ensure that your filling is both
                functional and aesthetically pleasing. Our fillings are designed
                to last, helping you maintain a healthy, strong smile for years
                to come.
              </p>
              <Link
                href="/contact-us"
                className={styles.fillingsPage__contactButton}
              >
                Schedule an Appointment
              </Link>
            </ScrollFadeIn>
          </article>

          {/* Image Slider Section */}
          <aside className={styles.fillingsPage__imageSlider}>
            <ScrollFadeIn>
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
            </ScrollFadeIn>
          </aside>
        </section>

        {/* Consultation Banner */}
        <ConsultationBanner />
      </main>
    </>
  );
};

export default Fillings;

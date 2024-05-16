import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";

const DentalImplants = () => {
  return (
    <>
      <Head>
        <title>Dental Implants | Your Dental Practice</title>
        <meta
          name="description"
          content="Learn about dental implants provided by Your Dental Practice. Dental implants are a permanent solution for missing teeth and can help improve your smile and oral health."
        />
        <meta
          name="keywords"
          content="dental implants, missing teeth, permanent tooth replacement, oral health"
        />
      </Head>
      <main
        className={(styles["service-page"], styles["service-page--cosmetic"])}
      >
        <h1 className={styles["service-page__header"]}>Dental Implants</h1>
        <div className={styles["service-page__image-placeholder"]}>
          Image Placeholder
        </div>
        <p className={styles["service-page__text"]}>
          Dental implants provide a permanent solution to missing teeth and are
          considered the gold standard for tooth replacement.
        </p>
        <h2 className={styles["service-page__subheader"]}>
          Benefits of Dental Implants
        </h2>
        <p className={styles["service-page__text"]}>
          Dental implants offer numerous benefits including improved oral
          health, appearance, and function. They are designed to blend
          seamlessly with your other teeth.
        </p>
        <div className={styles["service-page__image-placeholder"]}>
          Image Placeholder
        </div>
        <h2 className={styles["service-page__subheader"]}>
          Procedure Overview
        </h2>
        <ol className={styles["service-page__list"]}>
          <li className={styles["service-page__list__item"]}>
            Initial Consultation
          </li>
          <li className={styles["service-page__list__item"]}>
            Implant Placement
          </li>
          <li className={styles["service-page__list__item"]}>
            Healing Process
          </li>
          <li className={styles["service-page__list__item"]}>
            Placement of the Crown
          </li>
        </ol>
        <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
        <p className={styles["service-page__text"]}>
          Our dental practice offers state-of-the-art implant technology and a
          compassionate, experienced dental team to ensure you receive the best
          care possible.
        </p>
        <Link
          href="/contact-us"
          className={styles["service-page__contact-button"]}
        >
          Contact Us
        </Link>
      </main>
    </>
  );
};

export default DentalImplants;

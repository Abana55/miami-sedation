import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";

const Fillings = () => {
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
      <main
        className={
          (styles["service-page"], styles["service-page--restoration"])
        }
      >
        <h1 className={styles["service-page__header"]}>Fillings</h1>
        <div className={styles["service-page__image-placeholder"]}>
          Image Placeholder
        </div>
        <p className={styles["service-page__text"]}>
          Dental fillings are used to treat cavities and restore the function
          and integrity of your teeth.
        </p>
        <h2 className={styles["service-page__subheader"]}>Types of Fillings</h2>
        <p className={styles["service-page__text"]}>
          There are several types of fillings available, including composite,
          amalgam, and gold fillings.
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
            Filling Placement
          </li>
          <li className={styles["service-page__list__item"]}>
            Post-Procedure Care
          </li>
        </ol>
        <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
        <p className={styles["service-page__text"]}>
          Our dental practice offers high-quality fillings and personalized care
          to ensure the best outcomes for our patients.
        </p>
        <Link href="/contact-us" className={styles["service-page__contact-button"]}>
          Contact Us
        </Link>
      </main>
    </>
  );
};

export default Fillings;

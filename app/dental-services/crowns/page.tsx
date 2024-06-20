"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";

const Crowns = () => {
  return (
    <>
      <Head>
        <title>Dental Crowns | Miami Sedation Dentistry</title>
        <meta
          name="description"
          content="Learn about dental crowns provided by Miami Sedation Dentistry. Dental crowns are used to restore the function, shape, and appearance of damaged teeth."
        />
        <meta
          name="keywords"
          content="dental crowns, tooth restoration, dental care, oral health, Miami Sedation Dentistry"
        />
      </Head>
      <main className={`${styles["service-page"]} ${styles["service-page--restoration"]}`}>
        <h1 className={styles["service-page__header"]}>Dental Crowns</h1>
        <section className={styles["service-page__content"]}>
          <article className={styles["service-page__articles"]}>
            <p className={styles["service-page__text"]}>
              Dental crowns are used to restore the function, shape, and appearance of damaged teeth. They cover the entire visible part of the tooth, providing strength and improving its appearance.
            </p>
            <h2 className={styles["service-page__subheader"]}>Procedure Overview</h2>
            <section className={styles["service-page__text"]}>
              <h3>Initial Consultation</h3>
              <p>The initial consultation involves a thorough examination, discussion of findings, and creation of a personalized treatment plan. The dentist will take X-rays, explain the procedure, and answer any questions you may have.</p>
              
              <h3>Tooth Preparation</h3>
              <p>The dentist will numb the tooth and surrounding area with local anesthesia. The tooth is then reshaped to make room for the crown. If the tooth is severely damaged, a filling material may be used to build it up.</p>
              
              <h3>Impressions and Temporary Crown</h3>
              <p>After reshaping the tooth, the dentist will take impressions of the tooth and surrounding teeth. These impressions are used to create a custom crown. A temporary crown is placed on the tooth to protect it while the permanent crown is being made.</p>
              
              <h3>Permanent Crown Placement</h3>
              <p>Once the permanent crown is ready, the temporary crown is removed, and the new crown is fitted and adjusted for comfort and proper bite. The crown is then permanently cemented into place.</p>
              
              <h3>Post-Procedure Care</h3>
              <p>After the procedure, you will receive instructions on how to care for your new crown. This includes maintaining good oral hygiene, avoiding certain foods, and attending regular dental check-ups to ensure the crown remains in good condition.</p>
            </section>
            <h2 className={styles["service-page__subheader"]}>Why Choose Us?</h2>
            <p className={styles["service-page__text"]}>
              Miami Sedation Dentistry offers high-quality dental crowns and personalized care to ensure the best outcomes for our patients. Our experienced team is dedicated to restoring your smile and improving your oral health.
            </p>
            <Link href="/contact-us" className={styles["service-page__contact-button"]}>
              Contact Us
            </Link>
          </article>
          <aside className={styles["service-page__image-slider"]}>
            <div className={styles["slider__main-image"]}>
              <img src="/images/crown1.jpg" alt="Dental Crown Procedure" />
            </div>
            <div className={styles["slider__thumbnails"]}>
              <div className={styles["thumbnail"]}>
                <img src="/images/crown2.jpg" alt="Dental Crown Example" />
              </div>
              <div className={styles["thumbnail"]}>
                <img src="/images/crown3.jpg" alt="Patient with Dental Crown" />
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Crowns;
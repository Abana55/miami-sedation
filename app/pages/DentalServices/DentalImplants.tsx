import React from "react";
import Head from "next/head";
import styles from "./DentalServices.module.scss";

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
      <main className={styles.servicePage}>
        <h1>Dental Implants</h1>
        <p>
          Dental implants provide a permanent solution to missing teeth and are
          considered the gold standard for tooth replacement.
        </p>
        <h2>Benefits of Dental Implants</h2>
        <p>
          Dental implants offer numerous benefits including improved oral
          health, appearance, and function. They are designed to blend
          seamlessly with your other teeth.
        </p>
        <h2>Procedure Overview</h2>
        <ol>
          <li>Initial Consultation</li>
          <li>Implant Placement</li>
          <li>Healing Process</li>
          <li>Placement of the Crown</li>
        </ol>
        <h2>Why Choose Us?</h2>
        <p>
          Our dental practice offers state-of-the-art implant technology and a
          compassionate, experienced dental team to ensure you receive the best
          care possible.
        </p>
      </main>
    </>
  );
};

export default DentalImplants;

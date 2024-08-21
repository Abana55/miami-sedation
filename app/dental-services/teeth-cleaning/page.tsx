import React from "react";
import Head from "next/head";
import styles from "../../DentalServices.module.scss";
import ConsultationBanner from "@/app/components/ConsultationBanner/ConsultationBanner";

const TeethCleaning: React.FC = () => {
  return (
    <>
      <Head>
        <title>Teeth Cleaning | Your Dental Office</title>
        <meta
          name="description"
          content="Learn why regular teeth cleaning is essential for your oral health. Our professional teeth cleaning services help prevent cavities, gum disease, and maintain your smile."
        />
        <meta
          name="keywords"
          content="Teeth Cleaning, Dental Cleaning, Oral Health, Preventive Dentistry"
        />
        <meta name="author" content="Your Dental Office" />
        <meta
          property="og:title"
          content="Teeth Cleaning | Your Dental Office"
        />
        <meta
          property="og:description"
          content="Learn why regular teeth cleaning is essential for your oral health. Our professional teeth cleaning services help prevent cavities, gum disease, and maintain your smile."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/services/teeth-cleaning"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/teeth-cleaning-1.jpg"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/services/teeth-cleaning"
        />
      </Head>
      <div className={styles.teethCleaningPage}>
        <h1 className={styles.teethCleaningTitle}>
          Why Teeth Cleaning is Essential for Your Oral Health
        </h1>
        <div className={styles.teethCleaningContent}>
          <p className={styles.teethCleaningIntro}>
            Regular teeth cleaning is a fundamental part of maintaining your
            oral health. It helps prevent cavities, gum disease, and other oral
            issues, ensuring your smile stays bright and healthy.
          </p>

          <h2 className={styles.teethCleaningSectionTitle}>
            The Importance of Professional Teeth Cleaning
          </h2>
          <div className={styles.teethCleaningImagePlaceholder}>
            <img
              src="/images/teeth-cleaning-1.jpg"
              alt="Teeth Cleaning"
              className={styles.teethCleaningImage}
            />
          </div>
          <p className={styles.teethCleaningText}>
            Even with good oral hygiene at home, plaque and tartar can build up
            in hard-to-reach areas of your mouth. Professional teeth cleaning
            removes these deposits, reducing the risk of cavities and gum
            disease.
          </p>

          <h2 className={styles.teethCleaningSectionTitle}>
            What Happens During a Teeth Cleaning Appointment?
          </h2>
          <p className={styles.teethCleaningText}>
            During your appointment, our dental hygienists will thoroughly clean
            your teeth, removing plaque and tartar, polishing your teeth, and
            providing personalized advice on how to maintain oral hygiene at
            home.
          </p>
          <div className={styles.teethCleaningImagePlaceholder}>
            <img
              src="/images/teeth-cleaning-2.jpg"
              alt="Dental Hygienist Cleaning Teeth"
              className={styles.teethCleaningImage}
            />
          </div>

          <h2 className={styles.teethCleaningSectionTitle}>
            How Often Should You Get Your Teeth Cleaned?
          </h2>
          <p className={styles.teethCleaningText}>
            We recommend that you visit us for a professional teeth cleaning
            every six months. This frequency helps keep your teeth and gums
            healthy and allows us to monitor your oral health for any signs of
            potential issues.
          </p>
          <p className={styles.teethCleaningConclusion}>
            Don’t wait until you have a problem—regular teeth cleaning is a
            proactive step towards maintaining a healthy smile. Contact us today
            to schedule your appointment.
          </p>
        </div>
        <ConsultationBanner />
      </div>
    </>
  );
};

export default TeethCleaning;

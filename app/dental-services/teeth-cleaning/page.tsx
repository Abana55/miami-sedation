import React from "react";
import styles from "../../DentalServices.module.scss";

const TeethCleaning: React.FC = () => {
  return (
    <div className={styles.teethCleaningPage}>
      <h1 className={styles.teethCleaningTitle}>
        Why Teeth Cleaning is Essential for Your Oral Health
      </h1>
      <div className={styles.teethCleaningContent}>
        <p className={styles.teethCleaningIntro}>
          Regular teeth cleaning is a fundamental part of maintaining your oral
          health. It helps prevent cavities, gum disease, and other oral issues,
          ensuring your smile stays bright and healthy.
        </p>
        <h2 className={styles.teethCleaningSectionTitle}>
          The Importance of Professional Teeth Cleaning
        </h2>
        <p className={styles.teethCleaningText}>
          Even with good oral hygiene at home, plaque and tartar can build up in
          hard-to-reach areas of your mouth. Professional teeth cleaning removes
          these deposits, reducing the risk of cavities and gum disease.
        </p>
        <h2 className={styles.teethCleaningSectionTitle}>
          What Happens During a Teeth Cleaning Appointment?
        </h2>
        <p className={styles.teethCleaningText}>
          During your appointment, our dental hygienists will thoroughly clean
          your teeth, removing plaque and tartar, polishing your teeth, and
          providing personalized advice on how to maintain oral hygiene at home.
        </p>
        <h2 className={styles.teethCleaningSectionTitle}>
          How Often Should You Get Your Teeth Cleaned?
        </h2>
        <p className={styles.teethCleaningText}>
          We recommend that you visit us for a professional teeth cleaning every
          six months. This frequency helps keep your teeth and gums healthy and
          allows us to monitor your oral health for any signs of potential
          issues.
        </p>
        <p className={styles.teethCleaningConclusion}>
          Don’t wait until you have a problem—regular teeth cleaning is a
          proactive step towards maintaining a healthy smile. Contact us today
          to schedule your appointment.
        </p>
      </div>
    </div>
  );
};

export default TeethCleaning;

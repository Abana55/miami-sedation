"use client";

import Link from "next/link";
import styles from "./ConsultationBanner.module.scss";

const ConsultationBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h2 className={styles.title}>Request a Consultation</h2>
        <p className={styles.description}>
          Contact us today to schedule your consultation with our dental experts.
        </p>
        <Link href="/contact-us" passHref>
          <button className={styles.contactButton}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default ConsultationBanner;

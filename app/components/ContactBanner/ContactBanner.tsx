"use client";

import Link from "next/link";
import styles from "./ContactBanner.module.scss";

const ContactBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>Request a Consultation</h1>
        <div className={styles.contactInfo}>
          <p className={styles.infoItem}>Call Us: <a href="tel:+17866255550">(786) 625-5550</a></p>
          <p className={styles.infoItem}>Email Us: <a href="mailto:info@example.com">info@example.com</a></p>
          <Link href="/contact-us" passHref>
            <button className={styles.contactButton}>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;

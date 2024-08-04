import React from "react";
import Link from "next/link";
import styles from "./ContactBanner.module.scss";

const ContactBanner = () => {
  return (
    <div className={styles.contactBanner}>
      <h2 className={styles.contactBanner__title}>Ready to Enhance Your Smile?</h2>
      <p className={styles.contactBanner__text}>
        Contact us today to schedule a consultation and learn more about our dental veneers.
      </p>
      <Link href="/contact-us">
        <button className={styles.contactBanner__button}>Contact Us</button>
      </Link>
    </div>
  );
};

export default ContactBanner;
